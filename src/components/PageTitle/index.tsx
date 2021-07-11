import React from 'react'
import styled from 'styled-components'
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
  font-family: SFPro900;
  margin-bottom: 5px;
`
const Subtitle = styled.div`
  color: #A9A9A9;
  font-size: 14px;
  font-weight: 400;
`


export default function PageTitle() {
  return (
    <StylePageTitle>
      <Text>
        <Title>
          CremePie Swap
        </Title>
        <Subtitle>The #1 AMM and yield farm on Polygon.</Subtitle>
      </Text>
    </StylePageTitle>
  )
}
