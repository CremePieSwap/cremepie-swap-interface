import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
// import { useTranslation } from 'react-i18next'
// import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
// import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'
import { isMobile } from 'react-device-detect'

import Home from '../../assets/svg/home_icon.svg'
import Trade from '../../assets/svg/trade_icon.svg'
import Pools from '../../assets/svg/pools_icon.svg'
import Farm from '../../assets/svg/farm_icon.svg'
import Active from '../../assets/svg/active_menu.svg'

const MenuFlyout = styled.div<{ isMobile: boolean, showMenu: boolean }>`
  position: fixed;
  padding-top: 80px;
  top: 0px;
  left: 0px;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.bg1};
  width: 0px;
  height: 100%;
  transition: padding-top 0.2s ease 0s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  border-right: 0px;
  z-index: 11;
  overflow: hidden;
  transform: translate3d(0px, 0px, 0px);
  white-space: nowrap;
  display: block;
  &.show {
    display: block;
    width: 240px;
  }
  &.minimize {
    display: block;
    width: 56px;
  }
  &.hide {
    display: none;
  }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
    display: flex;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.text3};
    :hover {
      color: ${({ theme }) => theme.text2};
      background: #89DBC420;
      cursor: pointer;
    }
    > img {
      width: 12px;
      margin-right: 1.25rem;
      margin-left: 0.5rem;
      &.active {
        display: none;
        margin-left: 0;
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
  const StyledAbsoluteLink = styled.a`
      display: flex;
      align-items: center;
      padding: 1rem;
      overflow: hidden;
      text-decoration: none;
      font-weight: 600;
      color: ${({ theme }) => theme.text3};
      :hover {
        color: ${({ theme }) => theme.text2};
        background: #89DBC420;
        cursor: pointer;
      }
      > img {
        width: 12px;
        margin-right: 1.25rem;
        margin-left: 0.5rem;
        &.active {
          display: none;
          margin-left: 0;
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
const StyledNotNavLink = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    overflow: hidden;
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.text3};
    :hover {
      color: ${({ theme }) => theme.text2};
      background: #89DBC420;
      cursor: pointer;
    }
    > img {
      width: 12px;
      margin-right: 1.25rem;
      margin-left: 0.5rem;
      &.active {
        display: none;
        margin-left: 0;
      }
    }
    
    &.active {
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
const StyledSubMenu = styled(NavLink).attrs({
  activeClassName
})`
    display: flex;
    align-items: center;
    padding: 1rem;
    padding-left: 56px;
    overflow: hidden;
    text-decoration: none;
    font-weight: 400;
    color: ${({ theme }) => theme.text3};
    :hover {
      color: ${({ theme }) => theme.text2};
      background: #89DBC420;
      cursor: pointer;
    }
    > img {
      width: 12px;
      margin-right: 1.25rem;
      margin-left: 0.5rem;
      &.active {
        display: none;
        margin-left: 0;
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
  showMenu: boolean,
  set_show_menu: () => void,
}

export default function Menu({
  showMenu,
  set_show_menu
}: MenuProps) {

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)
  // const { t } = useTranslation()
  const [openTrade, setOpenTrade] = useState(false)

  useEffect(() => {
    if (!showMenu) {
      setOpenTrade(false)
    }
  }, [showMenu])

  const handleOpenTrade = () => {
    setOpenTrade(!openTrade)
    if (!showMenu) {
      set_show_menu()
    }
  }

  return (
    <MenuFlyout ref={node as any}
      showMenu={showMenu}
      isMobile={isMobile}
      className={`${isMobile ? showMenu ? 'show mobile' : 'hide' : showMenu ? 'show' : 'minimize'}`}
    >
      <StyledNavLink id={`home-nav-link`} to={'/home'} onClick={() => isMobile && set_show_menu()}>
        <img className='active' src={Active} alt="active" />
        <img src={Home} alt="home" />
        Home
      </StyledNavLink>
      <StyledNotNavLink onClick={handleOpenTrade}>
        {openTrade && <img className='active' src={Active} alt="active" />}
        <img src={Trade} alt="trade" />
        Trade
      </StyledNotNavLink>
      {openTrade && <>
      <StyledSubMenu id={`swap-nav-link`} to={'/swap'} onClick={() => isMobile && set_show_menu()}>
        Exchange
      </StyledSubMenu>
      <StyledSubMenu
        id={`pool-nav-link`}
        to={'/pool'}
        isActive={(match, { pathname }) =>
          Boolean(match) ||
          pathname.startsWith('/add') ||
          pathname.startsWith('/remove') ||
          pathname.startsWith('/create') ||
          pathname.startsWith('/find')
        } onClick={() => isMobile && set_show_menu()}
      >
        Liquidity
      </StyledSubMenu>
      </>}
      <StyledAbsoluteLink
        href="https://swap.bscex.org/#/swap"
      >
        <img src={Farm} alt="farm" />
        Farm
      </StyledAbsoluteLink>
      <StyledAbsoluteLink
        href="https://swap.bscex.org/#/swap"
      >
        <img src={Pools} alt="pools" />
        Pools
      </StyledAbsoluteLink>
    </MenuFlyout>
  )
}
