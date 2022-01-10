import React from "react";
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  0% {
    transform: scale(1)
  }
  50%{
    transform: scale(1.3)
  }
  100% {
    transform: scale(1)
  }
`

const Container = styled.div`
  background: linear-gradient(to right, rgba(253,45,0,0.3), rgba(223,0,124,0.3));
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Wrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  position:relative;
`
const Spinner = styled.div`
  animation: ${rotate} 3s ease infinite;
  box-sizing:border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position:absolute;
  top:0;
  left:0;
  color: white;
  background: rgba(255,255,255,0.8);
`
const Text = styled.p`
  color: #1D1B26;
  font-weight: 700;
  font-size: 1.5rem;
  z-index:1
`
const Loader = () => {

  return (
    <Container>
      <Wrapper>
        <Text>
          working on it...
        </Text>
        <Spinner>
        </Spinner>
      </Wrapper>
    </Container>
  )
}

export default Loader