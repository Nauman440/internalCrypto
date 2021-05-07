import { Row } from "antd"
import React from "react"
import styled from "styled-components"
import Navbar from "../components/common/navbar/Navbar"
import HeroSection from "../components/hero-section"
import HeroImg from "../images/hero-img.png"

const StyledDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 1), rgba(255, 255, 255, -0.1)),
    url(${props => props.url});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  overflow: hidden;
`

const Game = () => {
  return (
    <>
      <StyledDiv url={HeroImg}>
        <Navbar />
        <HeroSection />
      </StyledDiv>
    </>
  )
}

export default Game
