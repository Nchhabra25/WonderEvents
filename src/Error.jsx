import React from 'react'
import Btn from './assets/Btn'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
const Wrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 4rem 0;
    img{
        margin:0.5rem;
        height:50vh;
    }
`
const Error = () => {
  return (
    <>
      <Wrapper>
        <img src='../Images/error.svg' alt='error'/>
        <NavLink to="/">
        <Btn text='Go to Home'/>
        </NavLink>
      </Wrapper>
    </>
  )
}

export default Error
