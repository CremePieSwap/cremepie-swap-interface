import React from 'react'
import styled from 'styled-components'
import swap_background from '../assets/svg/swap_background.svg'

export const BodyWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  border-radius: 30px;
  background: url(${swap_background}) no-repeat;
  min-height: 700px;
  padding: 1rem;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
