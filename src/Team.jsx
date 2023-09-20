import React, { useState } from 'react'
import styled from 'styled-components'
import Data from './assets/Data'
const LogoText=styled.h1`
  text-align: center;
    font-family: 'Akaya Telivigala', cursive;
    font-size: 4em;
    color: #92e7e3;
    text-shadow:2px 3px 3px #000;`
const Card=styled.div`
  margin:2rem;
  width:27%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border:1px solid grey;
  justify-content: center;
  align-items: center;
  @media (max-width: 1085px) {
    width: 25%;
  }
  @media (max-width: 900px) {
    width:35%;
  }
  @media (max-width: 670px) {
    width:65%;
  }
`
const Image=styled.img`
  height:20rem;
  border-bottom:1px solid grey;
  position:relative;
  bottom:3rem;
  &:hover{
    transform: scale(1.1);
    border:none;
  }
`
const Container=styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 670px) {
    justify-content: center;
    align-items: center;
  }
`
const Title=styled.h1`
   position: relative;
   bottom: 2rem;
  text-align: center;
`
const Team = () => {
  const[imgs,setImgs]=useState(Data);
  return (
    <>
    <LogoText>Our Team</LogoText>
      <Container>
      {Data.map((ele)=>{
        const {id,image,Name,Position}=ele;
        return(
          <>
          <Card>
        <Image src={image}/>
        <Title>{Name}</Title>
        <Title>{Position}</Title>
        </Card>
        </>
        );
      })
      }
        
      
      </Container>
    </>
  )
}

export default Team
