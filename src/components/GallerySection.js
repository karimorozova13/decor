import React from 'react'
import Section from './generic/Section'
import Container from './generic/Container'
import { colors } from '@/config/colors'
import styled from 'styled-components'
import Link from 'next/link'

const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 40px;
`
const Title = styled.h2`
font-size: 24px;
text-align: center;
color: ${colors.mainWhite};
`

const Btn = styled(Link)`
text-decoration: none;
color: ${colors.mainText};
background-color: ${colors.mainWhite};
border: 1px solid ${colors.mainText};
font-weight: 700;
font-size: 16px;
border-radius: 12px;
min-height: 45px;
min-width: 250px;
padding: 7px;
padding-top: 12px;
text-align: center;
transition: 250ms cubic-bezier(0.19, 1, 0.22, 1);
:hover {
    color: ${colors.mainWhite};
background-color: transparent;
}
`

const GallerySection = () => {
  return (
   <Section  pt={80} pb={80} bg={colors.secodaryText}>
    <Container>
        <Content>
            <Title>{'Whatever you can dream up that has to do with us'}</Title>
            <Btn href={'/gallery?category=wedding'}>{'View our work'}</Btn>
        </Content>
    </Container>
   </Section>
  )
}

export default GallerySection
