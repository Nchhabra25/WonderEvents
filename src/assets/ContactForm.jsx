import React from 'react'
import styled from 'styled-components';
import Btn from './Btn';
const Label=styled.label`
    display: block;
    margin:1rem;
    font-weight: bold;
`
const Input=styled.input`
    display: block;
    height: 2rem;
    width:70vw;
    margin:1rem;
    border-radius: 0.7rem;
    &:focus{
      box-shadow: 0 0 8px #2c2828;
    }
`
const Title=styled.h1`
  text-align: center;
  font-family: 'Akaya Telivigala', cursive;
  font-size: 4em;
  color: #c892e7;
  text-shadow:2px 3px 3px #000;
  text-transform: capitalize;
  margin: 1rem;
  @media (max-width: 750px) {
    font-size: 3em;
  }
  @media (max-width: 440px) {
    font-size: 2.5em;
  }
`
const Wrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:1rem;
    border: 4px solid #ffa1b1;
    border-radius: 2rem;
    
    .sub{
      background-color: #ee2647;
      width: 5.5rem;
      height: 2.3rem;
      font-size: 1rem;
      color:white;
      text-shadow:2px 3px 3px #000;
      border: 2px solid pink;
      font-weight: bold;
      position:relative;
      margin: 1rem auto;
      border-radius: 1rem;
      cursor: pointer;
      &:hover{
        box-shadow:2px 2px 3px #ff667f;
        transform:scale(1.1);
        transition: 0.1s ease-out;
      }
    }
`
const handleSubmit = (event) => {
  event.preventDefault();
  event.target.reset()
  alert(`thanks for filling the form`)
}

const ContactForm = () => {
  return (
    <>
      <Wrapper>
      <Title>or Fill this form to book a call with our experts</Title>
      <form action='#' onSubmit={handleSubmit}>
        <Label htmlFor='name'>Name</Label>
        <Input type='text' id='name' name='email' autoComplete='off' required/>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='email' autoComplete='off' required/>
        <Label htmlFor='phone'>Phone Number</Label>
        <Input type='text' id='phone' name='email' autoComplete='off' required/>
        <Label htmlFor="date">Event Date</Label>
        <Input type="date" id="date" name="birthday" required/>
        <Input className='sub' type='submit' value='Submit'/>
      </form>
      </Wrapper>
    </>
  )
}

export default ContactForm
