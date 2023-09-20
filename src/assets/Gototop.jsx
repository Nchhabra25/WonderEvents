import { useState,useEffect } from 'react'
import React from 'react'
import styled from 'styled-components'
const Container=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top {
    font-size: 2.4rem;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    background-color: orangered;
}
    @keyframes gototop {
      0% {
        transform: translateY(-0.2rem);
      }
      100% {
        transform: translateY(0.7rem);
      }
    }
    i{
        animation: gototop 0.9s linear infinite alternate-reverse;
        font-size:40px;
        padding:2px;
        margin: 2px;
        color: white;
    }
    
`

const Taketotop=()=>{
    
    window.scrollTo({
        top: 0, 
        behavior: 'smooth'
      });
      console.log("done")
}
const Gototop = () => {
        const [isVisible, setIsVisible] = useState(false);
      
        const listenToScroll = () => {
          let heightToHidden = 20;
          const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
      
          if (winScroll > heightToHidden) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        };
      
        useEffect(() => {
          window.addEventListener("scroll", listenToScroll);
          return () => window.removeEventListener("scroll", listenToScroll);
        }, []);
  return (
    <>
      <Container >
      {isVisible && (
      <div className='top' onClick={()=>Taketotop()}>
      <span><i class='bx bx-up-arrow-alt'></i></span>
      </div>  )}
      </Container>
    </>
  )
}

export default Gototop
