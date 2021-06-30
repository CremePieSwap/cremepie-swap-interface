
import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  background: linear-gradient(247.99deg, rgba(73, 73, 73, 0.49) 0%, rgba(65, 65, 65, 0.78) 48.89%, rgba(62, 62, 62, 0.71) 98.46%);
  box-shadow: 20.7171px 36.9949px 66.5908px rgba(23, 18, 43, 0.45);
  backdrop-filter: blur(19.5311px);
  border-radius: 15px;
  text-align: left;
  position: relative;
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

interface RectangleBlockProps {
  titleColor: string,
  subtitleColor: string
}

export default function RectangleBlock({
  titleColor,
  subtitleColor
}: RectangleBlockProps) {

  return (
    <Block>
      <Subtitle color={subtitleColor}>Creme To Harvest</Subtitle>
      <Title color={titleColor}>0.0000</Title>
      <Subtitle color={subtitleColor}>~$0.00</Subtitle>
    </Block>
  )
}
