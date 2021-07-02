import React from 'react'
import styled from 'styled-components'

import TitleImage from '../../assets/svg/title.svg'
import HomeBackground from '../../assets/images/home-background.png'

const StylePageTitle = styled.div`
  background-image: url(${HomeBackground});
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  min-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  margin-top: 50px;
`

const Title = styled.div`
  color: #E3507A;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 5px;
`
const Subtitle = styled.div`
  color: #DADADA;
  font-size: 12px;
  font-weight: 400;
`


export default function PageTitle() {
  return (
    <StylePageTitle>
      <Text>
        <Title>
          <img src={TitleImage} alt="page title"/>
        </Title>
        <Subtitle>The #1 AMM and yield farm on Binance Smart Chain.</Subtitle>
      </Text>
    </StylePageTitle>
  )
}
