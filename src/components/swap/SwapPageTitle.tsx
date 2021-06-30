import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SwapIcon1 from '../../assets/svg/swap_icon_1.svg'
import SwapIcon2 from '../../assets/svg/swap_icon_2.svg'

const NavLinkContainer = styled.div`
  margin-top: 40px;
  width: 180px;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  background: #FFF7E2;
  border: 1px solid #CCCCCC;
  border-radius: 43px;
`
const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.text3};
  border-radius: 43px;
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
  &.active {
    background: ${({ theme }) => theme.text3};
    color: #fff;
  }
`
const StylePageTitle = styled.div`
  color: ${({ theme }) => theme.text3};
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
`

const StylePageSubtitle = styled.div`
  color: ${({ theme }) => theme.text3};
  font-size: 14px;
  line-height: 40px;
  font-weight: 500;
`
const StyleButtons = styled.div`
  margin-bottom: 100px;
  img {
    cursor: pointer;
  }
`

export default function SwapPageTitle() {
  return (
    <div style={{ textAlign: 'center' }}>
      <NavLinkContainer>
        <StyledNavLink
          id={`swap-nav-link`}
          to={'/swap'}
          className='active'
        >
          Swap
        </StyledNavLink>
        <StyledNavLink
          id={`pool-nav-link`}
          to={'/pool'}
        >
          Liquidity
        </StyledNavLink>
      </NavLinkContainer>
      <StylePageTitle>Exchange</StylePageTitle>
      <StylePageSubtitle>Trade tokens in an instant</StylePageSubtitle>
      <StyleButtons>
        <img src={SwapIcon1} alt="" style={{ marginRight: 10 }} />
        <img src={SwapIcon2} alt="" />
      </StyleButtons>
    </div>
  )
}
