import React from 'react'
import styled from 'styled-components'
import Typewritertext from './assets/Typewritertext'
import About from './components/About'
import ChooseUs from './components/ChooseUs'
import Faq from './components/Faq'
const Section=styled.section`
    width: 100vw;
    position: relative;
`
const Container=styled.div`
    width:75%;
    min-height:80vh;
    margin:0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    .text{
      @media (max-width: 575px) {
      }
    }
    @media (max-width: 575px) {
      flex-direction: column-reverse;
      width: 100%;
    }
`
const Box = styled.div`
  width:50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    @media (max-width: 575px) {
      width:100%;
      text-align: center;
      margin: auto;
    }
`;

const Imgcontainer=styled.div`
  width:50%;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
`
const Img=styled.img`
`
const Home = () => {
  return (
    <>
      <Section>
        <Container>
            <Box className='text'>
            <Typewritertext/>
            </Box>
            <Box>
              <Imgcontainer>
              <Img src='https://ouch-cdn2.icons8.com/kc7aYaQaPJozagPN1TsaJGPhB8hOGKh60Yrr_NA53WE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvODIy/LzQ3ODMzMjQxLWIw/ZGEtNDUzZS1iNmUw/LTE0MjY1ODA5ZTQz/MC5zdmc.png'/>
              <Img src='https://ouch-cdn2.icons8.com/1PE7NNBWrDxkWKFfb0jcD5RQEYgORLlpImdPZNQoJ-4/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzUv/ZmY2YWE0YmEtMmNi/YS00MTk5LWE2NTIt/YTFiZmZhMGRmZWVk/LnBuZw.png'/>
              </Imgcontainer>
              </Box>
        </Container>
        <ChooseUs/>
        <About/>
        <Faq/>
      </Section>
    </>
  )
}

export default Home
