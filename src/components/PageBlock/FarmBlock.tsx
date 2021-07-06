import React from 'react'
import styled from 'styled-components'
import MiniCremePie from '../../assets/svg/mini_creme_pie.svg'
import BgPie from '../../assets/svg/background_pie.svg'

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  background: linear-gradient(247.99deg, rgba(73, 73, 73, 0.49) 0%, rgba(65, 65, 65, 0.78) 48.89%, rgba(62, 62, 62, 0.71) 98.46%);
  box-shadow: 20.7171px 36.9949px 66.5908px rgba(23, 18, 43, 0.45);
  backdrop-filter: blur(3px);
  border-radius: 15px;
  text-align: left;
  position: relative;
  height: 100%;
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0 auto 20px;
    width: 100%;
  `};
`
const BlockTitle = styled.div`
  font-size: 30px;
  line-height: 40px;
  font-weight: 600;
  color: ${({ theme }) => theme.text2};
  margin-bottom: 10px;
`
const BlockContent = styled.div`
`
const Subtitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.text2};
`
const Title = styled.div`
  font-size: 30px;
  line-height: 40px;
  font-weight: 900;
  color: ${({ theme }) => theme.text2};
`
const Subtitle2 = styled.div`
  font-size: 10px;
  line-height: 16px;
  color: ${({ theme }) => theme.text1};
`
const BlockButton = styled.div`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text3};
  height: 24px;
  background-color: ${({ theme }) => theme.text2};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5), -5px -5px 10px #4F4F4F;
  border-radius: 32px;
  cursor: pointer;
`
const PieBackground = styled.div`
  position: absolute;
  bottom: 45px;
  right: 0;
  opacity: 0.2;
`

export default function FarmBlock() {

  return (
    <Block>
      <BlockTitle>Farms & Staking</BlockTitle>
      <img src={MiniCremePie} alt="Mini pie" />
      <BlockContent>
        <Subtitle>Creme To Harvest</Subtitle>
        <Title>0.0000</Title>
        <Subtitle2>~$0.00</Subtitle2>
      </BlockContent>
      <BlockContent style={{ margin: '20px 0' }}>
        <Subtitle>Creme In Wallet</Subtitle>
        <Title>0.0000</Title>
        <Subtitle2>~$0.00</Subtitle2>
      </BlockContent>
      <BlockButton>
        Harvest All
      </BlockButton>
      <PieBackground>
        <img src={BgPie} alt="pie" />
      </PieBackground>
    </Block>
  )
}
