import React from 'react'
import './App.css'
import styled from 'styled-components'
import canary from "./canary.jpeg"
import Clock from 'react-live-clock'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-bottom: 6rem;
`

const Canary = styled.img`
  width: 200px;
  background-color: lightblue;
  align-self: flex-start;
`

const Title = styled.p`
  padding: 4rem 0 1rem;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
    padding-top: 0;
  }
`

const StreamWrapper = styled.div`
  overflow:hidden;
  padding-bottom:30%;
  position:relative;
  width: 40%;
  margin: 0 1rem;

  iframe {
    left:0;
    top:0;
    border: 0;
    height:100%;
    width:100%;
    position:absolute;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-bottom: 75%;
    margin-bottom: 1rem;
  }
`

const ClockContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem;
`

function App() {
  return (
    <Container>
      <Title className="App-logo">
        canary
      </Title>

      <ContentContainer>
      <StreamWrapper>
          <iframe 
            src="//iframe.dacast.com/b/144726/c/515743"
            allow="autoplay"
            allowFullScreen 
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            oallowfullscreen="true"
            msallowfullscreen="true"
          />
        </StreamWrapper>
        <StreamWrapper>
          <iframe
            src="//iframe.dacast.com/b/144726/c/515913" 
            allow="autoplay" 
            allowFullScreen 
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            oallowfullscreen="true"
            msallowfullscreen="true"
          />
        </StreamWrapper>
      </ContentContainer>
      <ClockContainer>
        <Clock format={'h:mm:ss A'} ticking={true} timezone={'US/Pacific'} />
      </ClockContainer>
    </Container>
  );
}

export default App;
