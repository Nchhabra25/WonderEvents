import React from 'react'
import styled from 'styled-components'
import ContactForm from './assets/ContactForm'
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`
const Title=styled.h1`
  text-align: center;
  font-family: 'Akaya Telivigala', cursive;
  font-size: 4em;
  color: #c892e7;
  text-shadow:2px 3px 3px #000;
  text-transform: capitalize;
  margin: 1rem;
`
const Contact=styled.div`
`
const Booking = () => {
  return (
    <Wrapper>
      <Title>Feel free to visit us</Title>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14002.526500134265!2d77.11399785000002!3d28.67074669645987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1689450957794!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:"1px solid black"}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      <Contact>
        <ContactForm/>
      </Contact>
    </Wrapper>
  )
}

export default Booking
