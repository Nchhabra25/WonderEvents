import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.section`
  display: flex;
  place-items: center;
  flex-wrap:wrap;
  justify-content: center;
  align-items: center;
  border-top: 1px solid grey;
  background-color:#f18686;
  width: 102%;
  overflow-x: hidden;
`
const Box=styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1,label{
    font-size: 1.2rem;
    color: #fdefd3;
    text-decoration: underline;
  }
  span{
    font-weight:100;
  }
  p,li{
    margin:0.5rem;
    color:white;
  }
  input{
    margin:0.5rem;
    width:80%;
    height:1.5rem;
    border-radius:8px;
  }
  box-icon{
    position: relative;
    top:5px;
  }
  a{
    &:hover{
      color:orangered;
      transition: 0.5s ease-in;
    }
  }
`
const Wrapper2=styled.section`
margin-bottom: -12px;
   border-top: 1px solid white;
  background-color:#f18686;
  width: 102%;
  overflow-x: hidden;
`
const Copyright=styled.p`
color:grey;
text-align: left;
padding: 3px;
position: relative;
left:2px;
font-size: 0.7rem;
`
const Footer = () => {
  return (
    <>
      <Wrapper>
        <Box>
          <h1><span>Wonder</span>Events</h1>
          <p>Creating Experiences That Leave A Lasting Impression</p>
          <p>Give Your Events The Touch Of Love</p>
          <p><a href='#'><box-icon type='solid' name='phone'></box-icon> 9845125387</a></p>
          <p><a href='#'><box-icon type='solid' name='envelope'></box-icon> wonderevents@gmail.com</a></p>
        </Box>
        <Box>
          <h1>Check out these links!</h1>
          <ul>
            <li><a href="https://www.flaticon.com/free-icons/money" title="money icons">Money icons created by Freepik - Flaticon</a></li>
            <li><a href="https://www.flaticon.com/free-icons/clock" title="clock icons">Clock icons created by Freepik - Flaticon</a></li>
            <li>
            <a href="https://www.flaticon.com/free-icons/magnifying-glass" title="magnifying glass icons">Magnifying glass icons created by Vectors Market - Flaticon</a>
            </li>
            <li>
            <a href="https://icons8.com/" title="hero section icons">Hero Section icon created by Icon8</a>
            </li>
            <li>
            <a href="https://bigheads.io/" title="hero section icons">Team Section characters created by Bigheads</a>
            </li>
          </ul>
        </Box>
        <Box>
          <label htmlFor='email'>Subscribe To Our Newsletter!</label>
          <input id='email' type='email' placeholder='Enter email'/>
          <h1>Working Hours</h1>
          <p>9am-5pm</p>
          <p>Monday-Friday</p>
        </Box>
      </Wrapper>
      <Wrapper2>
          <Copyright>&copy; Courtesy of WonderEvents2023</Copyright>
      </Wrapper2>
    </>
  )
}

export default Footer
