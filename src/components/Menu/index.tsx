import React, { useRef } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
// import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
// import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { isMobile } from 'react-device-detect'

import Home from '../../assets/svg/home_icon.svg'
import Trade from '../../assets/svg/trade_icon.svg'
import Pools from '../../assets/svg/pools_icon.svg'
import Active from '../../assets/svg/active_menu.svg'

// import { ButtonPrimary } from '../Button'

// const StyledMenuIcon = styled(MenuIcon)`
//   path {
//     stroke: ${({ theme }) => theme.text1};
//   }
// `

// const StyledMenuButton = styled.button`
//   width: 100%;
//   height: 100%;
//   border: none;
//   background-color: transparent;
//   margin: 0;
//   padding: 0;
//   height: 35px;
//   background-color: ${({ theme }) => theme.bg3};

//   padding: 0.15rem 0.5rem;
//   border-radius: 0.5rem;

//   :hover,
//   :focus {
//     cursor: pointer;
//     outline: none;
//     background-color: ${({ theme }) => theme.bg4};
//   }

//   svg {
//     margin-top: 2px;
//   }
// `

// const StyledMenu = styled.div`
//   margin-left: 0.5rem;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   border: none;
//   text-align: left;
// `

const MenuFlyout = styled.div`
  background-color: ${({ theme }) => theme.bg1};
  font-size: 1rem;
  z-index: 2;
  padding-top: 2rem;
  transition: width 0.3s;
  &.hide {
    display: none;
  }
  &.show {
    display: block;
    width: 240px;
    &.mobile {
      position: absolute;
      height: calc(100vh - 64px);
    }
  }
  &.minimize {
    display: block;
    width: 56px;
  }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
    activeClassName
  })`
    display: flex;
    align-items: center;
    padding: 1rem;
    color: ${({ theme }) => theme.text1};
    overflow: hidden;
    text-decoration: none;
    border-radius: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
    :hover {
      color: ${({ theme }) => theme.text2};
      cursor: pointer;
    }
    > img {
      width: 25px;
      margin-right: 1rem;
      &.active {
        display: none;
      }
    }
    
    &.${activeClassName} {
      > img {
        &.active {
          display: block;
          position: absolute;
          left: 0;
          width: 18px;
        }
      }
    }
  `

interface MenuProps {
  showMenu: boolean
}

export default function Menu({
  showMenu
}: MenuProps) {

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)
  const { t } = useTranslation()

  return (
    <MenuFlyout ref={node as any} className={`${isMobile ? showMenu ? 'show mobile' : 'hide' : showMenu ? 'show' : 'minimize'}`}>
      <StyledNavLink id={`home-nav-link`} to={'/home'}>
        <img className='active' src={Active} alt="active" />
        <img src={Home} alt="home" />
        Home
      </StyledNavLink>
      <StyledNavLink id={`swap-nav-link`} to={'/swap'}>
        <img className='active' src={Active} alt="active" />
        <img src={Trade} alt="trade" />
        Trade
      </StyledNavLink>
      <StyledNavLink
        id={`pool-nav-link`}
        to={'/pool'}
        isActive={(match, { pathname }) =>
          Boolean(match) ||
          pathname.startsWith('/add') ||
          pathname.startsWith('/remove') ||
          pathname.startsWith('/create') ||
          pathname.startsWith('/find')
        }
      >
        <img className='active' src={Active} alt="active" />
        <img src={Pools} alt="pools" />
        {t('pool')}
      </StyledNavLink>
    </MenuFlyout>
  )
}
