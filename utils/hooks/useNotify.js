import React, { createContext, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import genUid from "light-uid";
import { colors } from "../../config/colors";
import {
  FaTimes,
  FaCheck,
  FaExclamationTriangle,
  FaInfo,
} from "react-icons/fa";

const NotificationContext = createContext();
const LIFETIME = 4000;

const NotificationsContainer = styled.div`
  position: fixed;
  right: 0px;
  top: 10px;
  z-index: 9999999;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const NotificationInstance = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  background-color: ${colors.border};
  padding: 7px;
  border-radius: 7px 0px 0px 7px;
  box-shadow: 3px 3px 10px #0f1216, -3px -3px 10px #0f1418;
  width: 100%;
  border: 1px solid ${colors.border};
  border-right: 0px;
  margin-bottom: 10px;
  z-index: 9999999;
`;

const NOTIFICATION_TYPE = {
  SUCCESS: "success",
  ERROR: "error",
  WARNING: "warning",
  INFO: "info",
};
const NOTIFICATION_ICON = {
  success: <FaCheck />,
  error: <FaTimes />,
  warning: <FaExclamationTriangle />,
  info: <FaInfo />,
};
const NOTIFICATION_COLORS = {
  success: "green",
  error: "red",
  warning: "yellow",
  info: "white",
};
const IconDiv = styled.div`
  margin-right: 5px;
  color: ${({ type }) => NOTIFICATION_COLORS[type]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  font-size: 16px;
  color: ${colors.mainWhite};
`;

const Notification = ({ children, clearSelf, type }) => {
  let [timoutSet, setTimeoutSet] = useState(false);
  useEffect(() => {
    if (!timoutSet) {
      setTimeout(() => {
        clearSelf();
      }, LIFETIME);
      setTimeoutSet(true);
    }
  }, []);
  return (
    <NotificationInstance>
      <IconDiv type={type}>{NOTIFICATION_ICON[type]}</IconDiv>
      <Text>{children}</Text>
    </NotificationInstance>
  );
};

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState({});
  return (
    <NotificationContext.Provider value={[notifications, setNotifications]}>
      {children}
      <NotificationsContainer>
        {Object.entries(notifications).map(([_id, { text, type }], i) => (
          <Notification
            key={i}
            type={type}
            clearSelf={() =>
              setNotifications((v) => {
                delete v[_id];
                return { ...v };
              })
            }
          >
            {text}
          </Notification>
        ))}
      </NotificationsContainer>
    </NotificationContext.Provider>
  );
}

export default function useNotify() {
  const [notifications, setNotifications] = useContext(NotificationContext);
  return {
    success: (notification) => {
      const _id = genUid();
      setNotifications((v) => ({
        ...v,
        [_id]: { text: notification, type: NOTIFICATION_TYPE.SUCCESS },
      }));
    },
    error: (notification) => {
      const _id = genUid();
      setNotifications((v) => ({
        ...v,
        [_id]: { text: notification, type: NOTIFICATION_TYPE.ERROR },
      }));
    },
    warning: (notification) => {
      const _id = genUid();
      setNotifications((v) => ({
        ...v,
        [_id]: { text: notification, type: NOTIFICATION_TYPE.WARNING },
      }));
    },
    info: (notification) => {
      const _id = genUid();
      setNotifications((v) => ({
        ...v,
        [_id]: { text: notification, type: NOTIFICATION_TYPE.INFO },
      }));
    },
  };
}
