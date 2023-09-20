import React from 'react'
import styled from 'styled-components'
import Accordian from '../assets/Accordian'
const Wrapper=styled.div`
  margin: 3rem;
  background-color: #ffc7c7;
  border:2px solid pink;
  border-radius: 3rem;
  display:flex;
  justify-content: center;
  align-items:center;
  box-shadow:0 0 6px #f86591;
  flex-direction: column;
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
const Container=styled.div`
  width:75%;
  display:flex;
  justify-content: center;
  flex-direction: column;
`
const Box=styled.div`
`
const Faq = () => {
  return (
    <>
      <Wrapper>
        <Title>Commonly asked questions</Title>
        <Container>
          
          <Box>
            {
            <Accordian title="How far do you travel to manage events?" children="We are available to manage events both locally and internationally. While our primary service area is India, we are willing to travel to other locations to ensure your event's success. Additional travel expenses may apply depending on the event's location and logistics."/>
            }
          </Box>
          <Box>
            <Accordian title="Can you assist with obtaining necessary permits and licenses for the event?" children="Yes, we can help guide you through the process of obtaining necessary permits and licenses for your event. Our team is familiar with local regulations and can assist you in understanding the requirements and obtaining the appropriate permits to ensure a compliant and successful event."/>
            
          </Box>
          <Box>
            <Accordian title="How early should I book your services for my event?" children="It's best to book our services as early as possible to ensure availability and ample time for thorough planning. We recommend reaching out to us at least 6 months prior to your event date."/>
          </Box>
          <Box>
            <Accordian title="What is your policy on event cancellations or rescheduling?" children="We understand that unforeseen circumstances may require event cancellations or rescheduling. Our policy for cancellations and rescheduling is outlined in our contract agreement. We work closely with our clients to find suitable solutions and minimize any potential impact on their events."/>
          </Box>
          
        </Container>
      </Wrapper>
    </>
  )
}

export default Faq
