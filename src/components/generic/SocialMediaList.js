import React from 'react'
import styled from 'styled-components'
import { colors } from '@/config/colors'
import { FaInstagram, FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'

const SocialMedia = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
const Icon = styled(Link)`
text-decoration: none;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: 50px;
height: 50px;
color:${colors.secodaryText};
:hover {
    background-color: ${colors.bgAlpha};
color:${colors.tealColor};

}
`
const Line = styled.span`
width: 2px;
height: 20px;
background-color: ${colors.secodaryText};

`
const SocialMediaList = () => {
  return (
    <SocialMedia>
    <Icon href={'https://www.instagram.com/im.celebration?igsh=MXhwa2xzeGw5dDhqMg=='} target='_blank'>
        <FaInstagram size={25} />
    </Icon>
    <Line/>
    <Icon href={'https://www.facebook.com/profile.php?id=61550262813561'} target='_blank'>
        <FaFacebookF size={25} />
    </Icon>
</SocialMedia>
  )
}

export default SocialMediaList
