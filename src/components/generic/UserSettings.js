import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";

import { colors } from "@/config/colors";
import agent from "@/utils/helpers/agent";

import Loader from "./Loader";
import Toggler from "./Toggler";

const Popup = styled.div`
  position: absolute;
  top: 100%;
  right: 10px;
  border-radius: 10px;
  background-color: ${colors.linkBg};
  padding: 30px 15px;
  min-height: 300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const UserT = styled.h3`
  color: ${colors.mainWhite};
  padding-bottom: 5px;
  border-bottom: 1px solid ${colors.linkLine};
`;
const Settings = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Des = styled.p`
  color: ${colors.mainWhite};
  position: relative;
  cursor: pointer;
  :hover::after {
    opacity: 1;
  }

  ::after {
    content: "";
    opacity: 0;
    position: absolute;
    top: 110%;
    left: 0;
    width: 95%;
    height: 3px;
    background-color: ${colors.linkLine};
    z-index: 1;
  }
  :hover ::after {
    opacity: 1;
  }
`;
const LogoutBtn = styled.div`
  padding: 7px;
  cursor: pointer;
  color: ${colors.linkLine};
  margin: 0 auto;
  border: 1px solid ${colors.linkLine};
  border-radius: 30px;
  min-width: 122px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  &:hover {
    background-color: ${colors.linkLine};
    color: ${colors.mainWhite};
  }
`;

const UserSettings = ({ closeMenu }) => {
  const router = useRouter();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: () => agent.createPost(),
    onSuccess: ({ post }) => {
      router.push(`/update-post/${post._id}`);
      closeMenu();
    },
  });

  const logOutUser = async () => {
    agent.logout();
    await queryClient.invalidateQueries({ queryKey: ["currentUser"] });
    closeMenu();
  };

  return (
    <>
      {createPostMutation.isPending && <Loader />}
      <Popup
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeMenu();
          }
        }}
      >
        <UserT>{"User settings"}</UserT>
        <Settings>
          <Des
            onClick={() => {
              router.push({
                pathname: "/user-settings",
                query: { setting: "profile" },
              });
              closeMenu();
            }}
          >
            {"Profile"}
          </Des>
          <Des
            onClick={() => {
              router.push({
                pathname: "/user-settings",
                query: { setting: "account" },
              });
              closeMenu();
            }}
          >
            {"User settings"}
          </Des>
        </Settings>
        <UserT>{"My technical Profile"}</UserT>
        <Settings>
          <Des
            onClick={() => {
              router.push({
                pathname: "/profile",
              });
              closeMenu();
            }}
          >
            {"My Analysis"}
          </Des>
          <Des
            onClick={() => {
              createPostMutation.mutate();
            }}
          >
            {"Create a post"}
          </Des>
          <Des
            onClick={() => {
              router.push({
                pathname: "/profile",
                query: {
                  tab: "following",
                },
              });
              closeMenu();
            }}
          >
            {"Following"}
          </Des>
          <Des
            onClick={() => {
              router.push({
                pathname: "/profile",
                query: {
                  tab: "followers",
                },
              });
              closeMenu();
            }}
          >
            {"My Followers"}
          </Des>
        </Settings>
        <Toggler
          title={"Dark mode"}
          onChange={() => setIsDarkTheme(!isDarkTheme)}
        />
        <LogoutBtn onClick={logOutUser}>{"Log out"}</LogoutBtn>
      </Popup>
    </>
  );
};

export default UserSettings;
