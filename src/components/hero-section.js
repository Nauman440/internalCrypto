import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .btn-subscribe {
    margin-bottom: 5rem;
    width: 221px;
    height: 70px;
    background: #940e88;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    cursor: pointer;
    border: none;
  }

  h1 {
    width: 900px;
    font-weight: 400;
    font-size: 72px;
    line-height: 85px;
    text-align: center;
    color: #ffffff;
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.lg)} {
    h1 {
      width: 90%;
      font-size: 62px;
    }
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.md)} {
    h1 {
      font-size: 40px;
      line-height: 47px;
    }
  }
  ${({ theme: { down, breakpoints } }) => down(breakpoints.sm)} {
    h1 {
      width: 95%;
      font-size: 40px;
      line-height: 47px;
    }
  }
`

const HeroSection = () => {
  return (
    <>
      <StyledSection>
        <h1>Coming Soon ..</h1>
        <br />
      </StyledSection>
    </>
  )
}

export default HeroSection
