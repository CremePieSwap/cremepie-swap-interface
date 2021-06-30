import React from 'react'
import styled from 'styled-components'
import PageTitle from '../../components/PageTitle'
import PageBlock from '../../components/PageBlock'

const StyleHome = styled.div`
  width: 100%;
  text-align: center;
`

export default function Home() {
  return (
    <StyleHome>
      <PageTitle/>
      <PageBlock/>
    </StyleHome>
  )
}
