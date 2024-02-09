import React, { useState } from 'react'
import Section from './Section'
import Container from './Container'
import { colors } from '@/config/colors'
import styled from 'styled-components'
import Link from 'next/link'
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import SocialMediaList from './SocialMediaList'
import Modal from './Modal'

const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 15px;
`

const Logo = styled(Link)`
text-decoration: none;
color: ${colors.secodaryText};
font-size: 24px;
font-weight: 700;
padding: 7px;
:hover {
    text-decoration: underline;
}
`
const SocialMedia = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

const Line = styled.span`
width: 2px;
height: 20px;
background-color: ${colors.secodaryText};
`
const InternalLink = styled(Link)`
text-decoration: none;
color: ${colors.secodaryText};
cursor: pointer;
padding: 7px;
:hover {
    text-decoration: underline;
    color: ${colors.tealColor};
}
`
const Copy = styled.p`
  color: ${colors.secodaryText};
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  padding-top: 40px;
`;
const Footer = () => {
    const [isContactModal, setIsContactModal] = useState()
  return (
  <Section pb={40} bg={colors.mainAccent}>
    <Container>
        <Content>
            <Logo href={'/'}>{'Celebration Decor'}</Logo>
            <SocialMediaList/>
            
            <SocialMedia>
<InternalLink href={'/'}>{'About'}</InternalLink>
<Line/>

<InternalLink href={'/'}>{'Services'}</InternalLink>
<Line/>

<InternalLink href={'/'}>{'Gallery'}</InternalLink>
<Line/>

<InternalLink as={'div'} onClick={()=>setIsContactModal(true)}>{'Contacts'}</InternalLink>

            </SocialMedia>
            <Copy>{`Copyright © ${new Date().getFullYear()} Celebration decor. All rights reserved.`}</Copy>
        </Content>
        {isContactModal && <Modal closeModal={()=>setIsContactModal(false)}/>}
    </Container>
  </Section>
  )
}

export default Footer
