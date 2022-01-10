import React from "react";
import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Container = styled.div`
  background-color: black;
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
  animation: ${rotate} 2s linear infinite;
  box-sizing:border-box;
  border: 10px solid gray;
  border-top: 10px solid red;
  border-bottom: 10px solid red;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position:absolute;
  top:0;
  left:0;
  color: white;
`
const Text = styled.p`
  animation:none
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