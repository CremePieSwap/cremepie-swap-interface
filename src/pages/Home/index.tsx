import React from 'react'
import styled from 'styled-components'
import PageTitle from '../../components/PageTitle'

const StyleHome = styled.div`
  width: 100%;
  text-align: center;
  margin-top: -50px;
`

export default function Home() {
  return (
    <StyleHome>
      <PageTitle/>
    </StyleHome>
  )
}
