import React from 'react';
import  { useRef, useEffect } from 'react';
import styled, {keyframes} from 'styled-components'
import Carousel from '../assets/Carousel';


const Section=styled.section`
    width:100vw;
    position:relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Row=styled.div`
    white-space: nowrap;
    box-sizing:content-box;
    margin:2rem 1rem;
    display:flex;
    align-items: center;
    justify-content: center;
    
`
const Title=styled.h1`
  text-align: center;
  font-family: 'Akaya Telivigala', cursive;
  font-size: 4em;
  color: #95e792;
  text-shadow:2px 3px 3px #000;
  text-transform: capitalize;
  margin: 0.5rem;
`


const About=()=>{
    
    return(
        <>
        <Section>
            <Title>Relive Our Spectacular Events </Title>
        <Row>
          <Carousel/>
          </Row>
        </Section>
        </>
    );
}
export default About;