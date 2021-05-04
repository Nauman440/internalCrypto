import React from "react"
import StyledSection from "./hero-section-styles"
import scrollTo from "gatsby-plugin-smoothscroll"

const HeroSection = () => {
  return (
    <>
      <StyledSection>
        {/* <div className="hero-text"> */}
        <h1>THE FIRST MULTIPLAYER ONLINE NFT BATTLEGROUND</h1>
        <br />
        <button
          onClick={() => scrollTo("#subscribe")}
          className="btn-subscribe"
        >
          SUBSCRIBE
        </button>
        {/* </div> */}
      </StyledSection>
    </>
  )
}

export default HeroSection
