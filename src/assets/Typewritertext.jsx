import React from 'react'
import styled from 'styled-components'
import Typewriter from'typewriter-effect';
import Btn from './Btn';
const Title=styled.h2`
    font-size:3em;
    text-transform: capitalize;
    width:80%;
    color:#202020;
    align-self: flex-start;
    @media (max-width: 940px) {
    font-size:2.5em;
    width: 100%;
  }
  @media (max-width: 650px) {
    font-size:2em;
    width: 100%;
    align-self: normal;
    padding: 5px;
    margin-right: 3vw;
    overflow-y: scroll;
  }
    span{
        text-transform: uppercase;
        font-family: 'Akaya Telivigala', cursive;
        padding: 1px;
        @media (max-width:805px) {
            font-size:2rem;
            text-align:center;
        }
    }
    .text-1{
        color:yellow;
        @media (max-width:805px) {
            font-size:2rem;
            text-align:center;
        }
    }
    .text-2{
        color:green;
        @media (max-width:805px) {
            font-size:2rem;
            text-align:center;
        }
    }
    .text-3{
        color:red;
        @media (max-width:805px) {
            font-size:2rem;
            text-align:center;
        }
    }
    .text-4{
        color:purple;
        @media (max-width:805px) {
            font-size:2rem
            
        }
    }
`
const Subtilte=styled.h3`
    font-size: 1.25em;
    text-transform:capitalize;
    color:grey;
    font-weight: 600;
    margin-bottom:1rem;
    width:80%;
    align-self: flex-start;
        width: 100%;
    @media (max-width:575px) {
    align-self: normal;
    text-align: center;
    width: 100%;
    }
`
const ButtonContainer=styled.div`
width:80%;
align-self: flex-start;
display: flex;
padding: 2px;
margin-left:rem;
@media (max-width:575px) {
    align-self: normal;
    width: 100%;
    align-items: center;
    justify-content: center;
    }
`
const Section=styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width:575px) {
    align-items: center;
    justify-content: center;
    width: 99%;
    }
    .text2{
        width: 80%;
    }
`
const Typewritertext = () => {
  return (
    <>
    <Section>
    <Title>
      Creating Experiences That Leave a Lasting Impression
    
        <Typewriter 
        options={{
            autoStart: true,
            loop: true,
            }}
        onInit={(typewriter)=>{
        typewriter.typeString(`<span class="text-1">Weddings.</span> `)
        .pauseFor(1500).deleteAll()
        .typeString(`<span class="text-2">Birthday Parties.</span>`)
        .pauseFor(1500).deleteAll()
        .typeString(`<span class="text-3">Engagements.</span>`)
        .pauseFor(1500).deleteAll()
        .typeString(`<span class="text-4">And much more!</span>`)
        .pauseFor(1500).deleteAll()
        .start()
    }}
    />
    
    </Title>
    <div className='text2'>
    <Subtilte>Give your events the touch of love</Subtilte>
    </div>
    </Section>
    <ButtonContainer>
    <Btn text="Explore" link='/Services'></Btn>
    </ButtonContainer>
    </>
  );
}

export default Typewritertext
