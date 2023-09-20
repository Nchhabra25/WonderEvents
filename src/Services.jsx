import React, { useState,useEffect } from 'react'
import { styled } from 'styled-components'
import Btn from './assets/Btn'
import Data2 from './assets/Data2'
import { NavLink } from 'react-router-dom'
const Services = () => {
    const Body=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 570px) {
      flex-direction: column;
    }
    `
const LogoText=styled.h1`
  text-align: center;
    font-family: 'Akaya Telivigala', cursive;
    font-size: 4em;
    color: #fae849;
    text-shadow:2px 3px 3px #000;`
const Container=styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    border:4px solid pink;
    border-radius: 1em;
    box-shadow:0 0 0.5em pink;
    margin:2rem;
    .content {
      opacity: 1;
      transition: opacity 0.3s;
    }
    .content-hidden {
      opacity: 0;
    }
`
const Title=styled.h1`
    font-style:italic;
    font-size:2.5rem;
    margin:5px;
    color: #40ddc8;
    text-shadow:2px 3px 3px #000;
    text-align: center;
    @media (max-width: 460px) {
      font-size: 1.8rem;
    }
`
const Holder=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    margin:15px;
`
const Imgholder=styled.div`
    width:60%;
    height: 10%;
    overflow:hidden;
    box-sizing: border-box;
`
const Textholder=styled.div`
    margin:1rem;
    width: 98%;
    text-align: center;
    justify-content: space-evenly;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Wrapper=styled.div`
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  .btn{
    margin:5px;
  }
`
const Description=styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`
const Image=styled.img`
    width: 100%;
`
  const[content,setContent]=useState(1);
  const [isVisible, setIsVisible] = useState(true);

const handleContentChange = (newContent) => {
  setIsVisible(false); // Trigger exit transition
  setTimeout(() => {
    setContent(newContent);
    setIsVisible(true); // Trigger enter transition
  }, 300); // Adjust the timeout to match your CSS transition duration
};

  return (
    <>
    <LogoText>Our Services</LogoText>
    <Body>
      <Wrapper>
        {<button className='btn' onClick={()=>{setContent(1), handleContentChange(1)}}>Wedding</button>}
        {<button className='btn' onClick={()=>{setContent(2), handleContentChange(2)}}>Birthdays</button>}
        {<button className='btn' onClick={()=>{setContent(3), handleContentChange(3)}}>Corporate Events</button>}
        {<button className='btn' onClick={()=>{setContent(4), handleContentChange(4)}}>Social Events</button>}
        {<button className='btn' onClick={()=>{setContent(5), handleContentChange(5)}}>Non-Profit Events</button>}
        {<button className='btn' onClick={()=>{setContent(6), handleContentChange(6)}}>Product Launches</button>}
      </Wrapper>
      <Container>
      {
      Data2.map((ele2)=>{
        const {id,Name,img,description}=ele2;
        
      return(
        <>
      {content===id?( 
      <>
        <div key={id} className={`content ${isVisible ? '' : 'content-hidden'}`}>
        <Title>{Name}</Title>
        <Holder>
            <Imgholder>
            <Image src={img}></Image>
            </Imgholder>
            <Textholder>
                <Description>
            {description}
                </Description>
                <NavLink to='./team'><Btn  text="Book Now"/></NavLink>
            </Textholder>
        </Holder>
        </div>
      </>
      ):null}
      </>
      )
    })
  }
  </Container>
      </Body>
    </>
  
  )
}

export default Services
