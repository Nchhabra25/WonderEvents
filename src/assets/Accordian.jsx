import React, { useState } from 'react';
import styled from 'styled-components';
const Container=styled.div`
  cursor:pointer;
  padding:1rem 0.5rem;
  margin:1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #202020;
`
const Title=styled.div`
  display:flex;
  justify-content:space-between;
  align-items: center;
  margin:0.5rem;
`

const Reveal=styled.div`
  margin: 0.5rem ;
  color:#202020;
  font-weight: 300;
`
const Question=styled.h1`
  font-size: 1.2rem;
  display:block;
  text-transform: uppercase;
`
const Answer=styled.p`
  font-size: 1rem;
  display:block;
`
const Span=styled.span`
  text-align: right;
`
const Accordian = ({title,children}) => {
  const[collapse,setCollapse]=useState(false);
  const[icon,setIcon]=useState(true)
  
  return (
    <>
      <Container onClick={()=>{setCollapse(!collapse), setIcon(!icon)}}>
        <Title>
          <Question>{title}</Question>
          <Span >{icon?<box-icon name='plus-medical'></box-icon>:<box-icon name='minus'></box-icon>}</Span>
        </Title>
        <Reveal style={{display:collapse?'block':'none'}}>
          <Answer>{children}</Answer>
        </Reveal>
      </Container>
    </>
  )
}

export default Accordian
