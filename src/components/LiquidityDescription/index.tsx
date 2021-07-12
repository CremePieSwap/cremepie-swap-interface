import React from 'react'
import styled from 'styled-components'
import MiniCremePie from '../../assets/svg/mini_creme_pie.svg'

const Block = styled.div`
  margin-top: 30px;
  max-width: 30vw;
  border-radius: 15px;
  text-align: center;
  position: relative;
  height: 100%;
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-top: 10px;
    width: 100%;
    max-width: 95vw;
  `};
`

const BlockContent = styled.div`
  margin-top: 5px;
  font-size: 14px;
  font-family: SFPro500;
  line-height: 20px;
`

export default function LiquidityDescription() {

  return (
    <Block>
      <img src={MiniCremePie} alt="Mini pie" />
      <BlockContent>
        By adding liquidity you'll earn 0.25% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.
      </BlockContent>
    </Block>
  )
}
