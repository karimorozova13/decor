import Container from '@/components/generic/Container'
import Section from '@/components/generic/Section'
import { colors } from '@/config/colors'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Content = styled.div`
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Item = styled(Link)`

display: flex;
align-items: center;
justify-content: center;
gap: 5px;
text-decoration: none;
color: ${colors.mainText};
transition: 250ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
:hover {
    color: ${colors.orange};

    p {
        text-decoration: underline;
    }
}
`
const Modal = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
max-width: 600px;
height: 450px;
box-shadow: ${colors.boxShadow};
gap: 20px;
`

const contacts = () => {
  return (
    <Section bg={colors.mainAccent}>
        <Container>
            <Content>
                <Modal>


            <Item href={'tel:35799797975'}>
                <FaPhoneAlt/>
                <p>{'+357-99797975'}</p></Item>
            <Item href={'mailto:lena@gmail.com'}>
                <TfiEmail/><p>{'lena@gmail.com'}</p></Item>
                </Modal>
            </Content>

        </Container>
    </Section>
  )
}

export default contacts
