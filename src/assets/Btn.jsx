import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
const Button=styled.button`
   
`
const Btn = ({text,link}) => {
  return (
    <>
      <Link to={link}>
      <Button>{text}</Button>
    </Link>
    </>
  )
}

export default Btn
