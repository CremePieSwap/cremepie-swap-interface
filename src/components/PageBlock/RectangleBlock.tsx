
import React from 'react'
import styled from 'styled-components'

const Block = styled.div`
  width: 350px;
  padding: 20px 30px;
  box-shadow: 20.7171px 36.9949px 66.5908px rgba(23, 18, 43, 0.45);
  backdrop-filter: blur(19.5311px);
  border-radius: 15px;
  text-align: left;
  position: relative;
  &.type-1 {
    background: linear-gradient(247.99deg, rgba(80, 227, 194, 0.5) 0%, rgba(255, 245, 133, 0.5) 49.23%, rgba(227, 80, 122, 0.5) 98.46%);
  }
  &.type-2 {
    background: linear-gradient(247.99deg, rgba(73, 73, 73, 0.49) 0%, rgba(65, 65, 65, 0.78) 48.89%, rgba(62, 62, 62, 0.71) 98.46%);
  }
  &.type-3 {
    background: linear-gradient(247.99deg, #FAE8BA 0%, #50E3C2 98.46%);
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
  }
  &.type-4, &.type-5 {
    margin-bottom: 30px;
    background: linear-gradient(247.99deg, rgba(73, 73, 73, 0.49) 0%, rgba(65, 65, 65, 0.78) 48.89%, rgba(62, 62, 62, 0.71) 98.46%);;
  }
`
const Subtitle = styled.div<{ color: string }>`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  color: ${({ color }) => color};
`
const Title = styled.div<{ color: string }>`
  font-size: 24px;
  line-height: 23px;
  font-weight: 900;
  color: ${({ color }) => color};
`
const Title3 = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: 900;
  color: ${({ theme }) => theme.text3};
  .highlight {
    color: #E3507A
  }
`
const Subtitle3 = styled.div`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text3};
  .highlight {
    color: #E3507A
  }
`
const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 100px 0;
`
const Button = styled.div`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
  background: #E3507A;
  border-radius: 32px;
  padding: 5px 30px;
  cursor: pointer;
  &:hover {
    box-shadow: 3px 3px 5px rgba(138, 172, 172, 0.5), -3px -3px 5px rgba(255, 255, 255, 0.5);
  }
`
const Title4 = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;  
  color: #DADADA;
`
const Subtitle4 = styled.div`
  font-size: 24px;
  line-height: 40px;
  font-weight: 600;
  color: #DADADA;
`
const Description4 = styled.div`
  font-size: 12px;
  line-height: 40px;
  font-weight: 400;
  color: #DADADA;
`
const Title5 = styled.div`
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;  
  color: #50E3C2;
`
const Subtitle5 = styled.div`
  font-size: 12px;
  line-height: 23px;
  font-weight: 400;
  color: #DADADA;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
interface RectangleBlockProps {
  type: number,
  titleColor: string,
  subtitleColor: string,
}

export default function RectangleBlock({
  type,
  titleColor,
  subtitleColor,
}: RectangleBlockProps) {
  switch (type) {
    case 1:
    case 2:
      return (
        <Block className={`type-${type}`}>
          <Subtitle color={subtitleColor}>
            {type === 1 ? 'Earn' : 'Earn up to'}
          </Subtitle>
          <Title color={titleColor}>
            {type === 1 ? 'Creme, BSCX, Barmy, zdCash...' : '358.27%'}
          </Title>
          <Subtitle color={subtitleColor}>
            {type === 1 ? 'In Pools' : 'APR in Farms'}
          </Subtitle>
        </Block>
      )
    case 3:
      return (
        <Block className={`type-${type}`}>
          <Title3>Whitelist registration is now <span className="highlight">OPEN!</span></Title3>
          <Subtitle3>To register, <span className="highlight">create an account</span> and go to the <span className="highlight">whitelist</span> page</Subtitle3>
          <ButtonRow>
            <Button>Sign in</Button>
            <Button>Sign up</Button>
          </ButtonRow>
        </Block>
      )
    case 4:
      return (
        <Block className={`type-${type}`}>
          <Subtitle4>Total Value Locked (TVL)</Subtitle4>
          <Title4>$6,785,701,307</Title4>
          <Description4>Across all LPs and Syrup Pools</Description4>
        </Block>
      )
    case 5:
      return (
        <Block className={`type-${type}`}>
          <Title5>Creme Stats</Title5>
          <Subtitle5>
            <div>Total Creme Supply</div>
            <div>187,769,899</div>
          </Subtitle5>
          <Subtitle5>
            <div>Total Creame  Burned</div>
            <div>164,048,490</div>
          </Subtitle5>
          <Subtitle5>
            <div>New Creame/block</div>
            <div>20</div>
          </Subtitle5>
        </Block>
      )
    default:
      return (
        <Block className={`type-${type}`}>
          <Subtitle color={subtitleColor}>
            {type === 1 ? 'Earn' : 'Earn up to'}
          </Subtitle>
          <Title color={titleColor}>
            {type === 1 ? 'Creme, BSCX, Barmy, zdCash...' : '358.27%'}
          </Title>
          <Subtitle color={subtitleColor}>
            {type === 1 ? 'In Pools' : 'APR in Farms'}
          </Subtitle>
        </Block>
      )
  }
}
