import React from 'react'
import styled from 'styled-components'
// import { useTranslation } from 'react-i18next'
import { NavLink, Link as HistoryLink } from 'react-router-dom'

import { ArrowLeft } from 'react-feather'
import { RowBetween } from '../Row'
import Settings from '../Settings'
import QuestionHelper from '../QuestionHelper'
// import SwapIcon2 from '../../assets/svg/swap_icon_2.svg'

const Tabs = styled.div`
  width: 170px;
  display: flex;
  margin: 20px auto;
  justify-content: center;
  align-items: center;
  background: #FFF7E2;
  border: 1px solid #CCCCCC;
  border-radius: 43px;
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    margin: 5px auto;
  `}
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  color: ${({ theme }) => theme.text1};
  border-radius: 43px;
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
  &.${activeClassName} {
    background: ${({ theme }) => theme.text1};
    color: #fff;
  }
`

const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.text1};
`
const StylePageTitle = styled.div`
  color: ${({ theme }) => theme.text1};
  font-size: 32px;
  line-height: 40px;
  font-weight: 900;
`

const StylePageSubtitle = styled.div`
  color: ${({ theme }) => theme.text1};
  font-size: 14px;
  line-height: 40px;
  font-weight: 500;
  &.pool {
    margin-bottom: 120px;
  }
  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    line-height: 32px;
  `}
`
const StyleButtons = styled.div`
  img {
    cursor: pointer;
  }
`

export function SwapPoolTabs({ active }: { active: 'swap' | 'pool' }) {
  // const { t } = useTranslation()
  return (
    <div style={{ textAlign: 'center' }}>
      <Tabs>
        <StyledNavLink id={`swap-nav-link`} to={'/swap'} isActive={() => active === 'swap'}>
          {/* {t('swap')} */}
          Swap
        </StyledNavLink>
        <StyledNavLink id={`pool-nav-link`} to={'/pool'} isActive={() => active === 'pool'}>
          {/* {t('Liquidity')} */}
          Liquidity
        </StyledNavLink>
      </Tabs>
      <StylePageTitle className={`${active === 'swap' ? 'swap' : 'pool'}`}>{active === 'swap' ? 'Exchange' : 'Your Liquidity'}</StylePageTitle>
      <StylePageSubtitle className={`${active === 'swap' ? 'swap' : 'pool'}`}>{active === 'swap' ? 'Trade tokens in an instant' : 'Remove liquidity to receive tokens back'}</StylePageSubtitle>
      {active === 'swap' && 
        <StyleButtons style={{marginBottom: 120, display: 'flex', justifyContent: 'center'}}>
          <Settings />
          {/* <img src={SwapIcon2} alt="" /> */}
        </StyleButtons>
      }
    </div>
  )
}

export function FindPoolTabs() {
  return (
    <RowBetween style={{ padding: '1rem', display: 'block', textAlign: 'center'}}>
      <HistoryLink to="/pool">
        <StyledArrowLeft />
      </HistoryLink>
      <StylePageTitle>Import Pool</StylePageTitle>
      <StylePageSubtitle className="pool">Remove liquidity to receive tokens back</StylePageSubtitle>
      <QuestionHelper text={"Use this tool to find pairs that don't automatically appear in the interface."} />
    </RowBetween>
  )
}

export function AddRemoveTabs({ adding, creating }: { adding: boolean; creating: boolean }) {
  return (
    <RowBetween style={{ padding: '1rem', display: 'block', textAlign: 'center'}}>
      <HistoryLink to="/pool">
        <StyledArrowLeft />
      </HistoryLink>
      <StylePageTitle>{creating ? 'Create a pair' : adding ? 'Add Liquidity' : 'Remove Liquidity'}</StylePageTitle>
      <StylePageSubtitle className="pool">Remove liquidity to receive tokens back</StylePageSubtitle>
      <QuestionHelper
        text={
          adding
            ? 'When you add liquidity, you are given pool tokens representing your position. These tokens automatically earn fees proportional to your share of the pool, and can be redeemed at any time.'
            : 'Removing pool tokens converts your position back into underlying tokens at the current rate, proportional to your share of the pool. Accrued fees are included in the amounts you receive.'
        }
      />
    </RowBetween>
  )
}
