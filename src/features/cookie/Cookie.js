// import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
// import { useSelector, useDispatch } from 'react-redux'
import { useCookies } from 'react-cookie'
import {
  // formatISO, addMinutes,
  addSeconds,
} from 'date-fns'

const StyledCookie = styled.div`
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  padding: 10px;
`

const CookiesBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const SessionStorageBar = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  justify-content: space-around;
`

function Cookie() {
  const [
    cookies,
    setCookie,
    // removeCookie
  ] = useCookies(['test'])

  const handleSetCookieClick = () => {
    const date = addSeconds(new Date(), 20)
    setCookie('test', 'A cookie test!', {
      path: '/',
      expires: date,
    })
    console.log('add a cookie!')
  }

  const handleShowCookieClick = () => {
    // formatISO(new Date(2019, 8, 18, 19, 0, 52))
    console.log(cookies.test)
    console.log()
  }

  return (
    <StyledCookie>
      <Container>
        <SessionStorageBar>SessionStorage</SessionStorageBar>

        <CookiesBar>
          <button onClick={handleSetCookieClick}> setCookie </button>
          cookies= {cookies.test}
          <button onClick={handleShowCookieClick}> showCookie in console.log </button>
        </CookiesBar>
      </Container>
    </StyledCookie>
  )
}

export default Cookie
