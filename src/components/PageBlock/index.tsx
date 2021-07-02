import React from 'react'
import styled from 'styled-components'
import FarmBlock from './FarmBlock'
import RectangleBlock from './RectangleBlock'

const StylePageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const BlockContainer = styled.div`
  width: 730px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 100%;
  `};
`

const BlockRow = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: block;
    width: 350px;
    margin: 0 auto 30px;
  `};
`

const RightBlock = styled.div`
  display: grid;
  grid-auto-rows: auto;
  gap: 20px;
  margin-bottom: 30px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    gap: 30px;
  `};
`


export default function PageBlock() {
  return (
    <StylePageBlock>
      <BlockContainer>
        <BlockRow>
          <FarmBlock />
          <RightBlock>
            <RectangleBlock 
              type={1}
              titleColor="#DADADA" 
              subtitleColor="#50E3C2"
            />
            <RectangleBlock 
              type={2}
              titleColor="#DADADA" 
              subtitleColor="#50E3C2"
            />
          </RightBlock>
        </BlockRow>
        <BlockRow>
          <RectangleBlock 
            type={3}
            titleColor="#DADADA" 
            subtitleColor="#50E3C2"
          />
        </BlockRow>
        <BlockRow>
          <RectangleBlock 
            type={4}
            titleColor="#DADADA" 
            subtitleColor="#50E3C2"
          />
          <RectangleBlock 
            type={5}
            titleColor="#DADADA" 
            subtitleColor="#50E3C2"
          />
        </BlockRow>
      </BlockContainer>
    </StylePageBlock>
  )
}
