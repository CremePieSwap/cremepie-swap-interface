import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { NavLink, Link as HistoryLink } from 'react-router-dom'

import { ArrowLeft } from 'react-feather'
import { RowBetween } from '../Row'
import QuestionHelper from '../QuestionHelper'
import SwapIcon1 from '../../assets/svg/swap_icon_1.svg'
import SwapIcon2 from '../../assets/svg/swap_icon_2.svg'

const Tabs = styled.div`
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

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  color: ${({ theme }) => theme.text3};
  border-radius: 43px;
  padding: 5px 20px;
  font-size: 14px;
  font-weight: 900;
  text-decoration: none;
  &.${activeClassName} {
    background: ${({ theme }) => theme.text3};
    color: #fff;
  }
`

const StyledArrowLeft = styled(ArrowLeft)`
  color: ${({ theme }) => theme.text1};
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
  img {
    cursor: pointer;
  }
`

export function SwapPoolTabs({ active }: { active: 'swap' | 'pool' }) {
  const { t } = useTranslation()
  return (
    <div style={{ textAlign: 'center' }}>
      <Tabs style={{ marginBottom: '20px' }}>
        <StyledNavLink id={`swap-nav-link`} to={'/swap'} isActive={() => active === 'swap'}>
          {t('swap')}
        </StyledNavLink>
        <StyledNavLink id={`pool-nav-link`} to={'/pool'} isActive={() => active === 'pool'}>
          {t('Liquidity')}
        </StyledNavLink>
      </Tabs>
      <StylePageTitle>{active === 'swap' ? 'Exchange' : 'Your Liquidity'}</StylePageTitle>
      <StylePageSubtitle>{active === 'swap' ? 'Trade tokens in an instant' : 'Remove liquidity to receive tokens back'}</StylePageSubtitle>
      <StyleButtons style={{marginBottom: 100}}>
        <img src={SwapIcon1} alt="" style={{ marginRight: 10 }} />
        <img src={SwapIcon2} alt="" />
      </StyleButtons>
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
      <StylePageSubtitle>Remove liquidity to receive tokens back</StylePageSubtitle>
      <StyleButtons style={{marginBottom: 80}}>
        <img src={SwapIcon1} alt="" style={{ marginRight: 10 }} />
        <img src={SwapIcon2} alt="" />
      </StyleButtons>
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
      <StylePageSubtitle>Remove liquidity to receive tokens back</StylePageSubtitle>
      <StyleButtons style={{marginBottom: 80}}>
        <img src={SwapIcon1} alt="" style={{ marginRight: 10 }} />
        <img src={SwapIcon2} alt="" />
      </StyleButtons>
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
