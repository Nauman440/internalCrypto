import React from "react"
import { Col, Row } from "antd"
import styled from "styled-components"
import HeroImg from "../../images/team-header.png"
import LinkedIn from "../../images/linkedin.png"

const StyledDiv = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-bottom: 4rem;

  .header-image {
    width: 700px;
    border-radius: 50%;
    background-color: white;
  }

  h1 {
    text-align: center;
    color: #fff;
  }

  .hero-img {
    width: 100%;
    height: auto;
  }
  .social-icon {
    width: 30px;
    align-self: center;
    cursor: pointer;
  }
`
const TeamDetails = () => {
  const link = "https://www.linkedin.com/in/jwu3"

  const gotoSocialPage = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }
  return (
    <StyledDiv>
      <div className="header-image">
        <img src={HeroImg} alt="hero" className="hero-img" />
      </div>
      <h1>ZART</h1>
      <Row justify="center" align="middle">
        <img
          src={LinkedIn}
          alt="linkedin"
          onClick={() => gotoSocialPage(link)}
          className="social-icon"
        />
      </Row>
    </StyledDiv>
  )
}

export default TeamDetails
