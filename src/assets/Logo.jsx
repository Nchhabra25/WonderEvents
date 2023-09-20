import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const LogoText=styled.h1`
    font-family: 'Akaya Telivigala', cursive;
    font-size: 4em;
    color: #ffb5b5;
    text-shadow:2px 3px 3px #000;
    transition: all 0.2s ease;
    &:hover{
        transform: scale(1.1);
    }
`
const Logo = () => {
  return (
    <>
      <LogoText>
        <Link to='/'>
        WE.
        </Link>
      </LogoText>
    </>
  )
}

export default Logo
