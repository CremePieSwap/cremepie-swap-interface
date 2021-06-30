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
`

const BlockRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const RightBlock = styled.div`
  
`


export default function PageBlock() {

  return (
    <StylePageBlock>
      <BlockContainer>
        <BlockRow>
          <FarmBlock />
          <RightBlock>
            <RectangleBlock titleColor="#50E3C2" subtitleColor="#DADADA"/>
            <RectangleBlock titleColor="#DADADA" subtitleColor="#50E3C2"/>
          </RightBlock>
        </BlockRow>
      </BlockContainer>
    </StylePageBlock>
  )
}
