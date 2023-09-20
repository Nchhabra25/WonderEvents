import * as React from "react";
import { useState } from "react";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from "styled-components"
const images = [
"https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/019/064/new_medium/taj_palace_delhi.JPG?1565096201",
"https://www.oyorooms.com/blog/wp-content/uploads/2018/02/fe-3.png",
"https://i.pinimg.com/736x/71/36/b0/7136b033ae818dff7ba29faf55503811.jpg",
"https://www.macmillan.org.uk/images/fundraising/events/special/carousel/1712-winter-gala.jpg",
"https://mrswp.b-cdn.net/wp-content/uploads/2020/01/alphagamma-MozCon-opportunities-1021x580-1-776x441.jpg",
];

const Wrapper=styled.div`
    max-width: 90vw; 
    margin: 0 auto; 
`

const Image=styled.img`
display: block;
  height: 50vh;
  max-width: 100vw;
  width:80%;
  border: 1px solid black;
`
const arrowContainerStyle = {
  width: "40px", 
  height: "40px", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  cursor: "pointer", 
};
const arrowContainerStyle2 = {
  width: "40px", 
  height: "40px", 
  display: "flex", 
  alignItems: "center", 
  justifyContent: "center", 
  cursor: "pointer", 
  marginRight:"6px"
};

const arrowSvgStyle = {
  width: "100%", 
  height: "100%", 
  fill: "rgba(250, 237, 237, 0.90)", 
  margin:'3px'
};

const properties = {
  prevArrow: (
    <div style={arrowContainerStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={arrowSvgStyle}>
        <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
      </svg>
    </div>
  ),
  nextArrow: (
    <div style={arrowContainerStyle2}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={arrowSvgStyle}>
        <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
      </svg>
    </div>
  ),
};
  const Carousel = () => {
  return (
    <>
  <Wrapper id="slideshow-container">
   <Zoom scale={0} indicators={false}  {...properties} >
      {images.map((each, index) => (
          <div key={index} style={{ width: "100%" }}>
              <Image style={{ objectFit: "cover", width: "100%" }} alt="Slide Image" src={each} />
          </div>
      ))}
    </Zoom>
    </Wrapper>
       
    </>
  );
};


export default Carousel;