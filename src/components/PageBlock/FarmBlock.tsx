import React from 'react'
import styled from 'styled-components'
import MiniCremePie from '../../assets/svg/mini_creme_pie.svg'
import BgPie from '../../assets/svg/background_pie.svg'

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  background: #FFFFFF;
  box-shadow: 1px 1px 1px rgba(23, 18, 43, 0.1);
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
  font-size: 14px;
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
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.text1};
`
const BlockButton = styled.div`
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text1};
  height: 24px;
  background-color: ${({ theme }) => theme.text2};
  box-shadow: 1px 1px 0px rgba(170, 170, 204, 0.5);
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
