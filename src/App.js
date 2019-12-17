import React from 'react';
import './App.css';
import styled from 'styled-components'
import canary from "./canary.jpeg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`

const Canary = styled.img`
  width: 200px;
  background-color: lightblue;
  align-self: flex-start;
`

const Title = styled.p`
  padding: 4rem 0 1rem;
`

function App() {
  return (
    <Container>
        <Title className="App-logo">
          canary
        </Title>

      <iframe 
        src="//iframe.dacast.com/b/144726/c/515743" 
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="streamy"
        frameBorder="0"
        width="535"
        height="400"
      />
      <Canary src={canary} />

    </Container>
  );
}

export default App;
