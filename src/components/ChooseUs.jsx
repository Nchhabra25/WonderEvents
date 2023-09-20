import React from "react";
import styled, { keyframes } from 'styled-components';
import Data3 from '../assets/Data3'
const Wrapper=styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    margin: 3rem;
    background-color: #ffc7c7;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    border:2px solid pink;
    border-radius: 3rem;
    box-shadow:0 0 6px #f86591;
    @media (max-width:585px) {
      
    grid-template-columns: repeat(1, 1fr);
    }
`
const Container=styled.div`
  width:70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`
const Content=styled.p`
  margin: 1rem 0;
  text-align: center;
`
const Title=styled.h1`
  @media (max-width:585px) {
    text-align: center;
  }
`
const Image=styled.img`
  width: 4rem;
  height:4rem;
  margin: 1rem 0;

`
const morph=keyframes`
0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
}
100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
}
`;
const Imgcont=styled.div`
  width: 5.5rem;
  height: 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: orange;
  animation: ${morph} 4s ease-in-out infinite;
  border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  transition: all 1s ease-in-out;
  
`
const ChooseUs = () => {
  return (
    <>
      <Wrapper>
        
            {
                Data3.map((ele)=>{
                    const {id,src,content,desc}=ele;
                    return(
                      <>
                      <Container>
                      <Imgcont>
                      <Image src={src}/>
                      </Imgcont>
                      <Title>{content}</Title>
                      <Content>{desc}</Content>
                      </Container>
                      </>
                    )
                })
                  
              }
        
      </Wrapper>
    </>
  )
}

export default ChooseUs
