import React from "react"
import StyledSection from "./hero-section-styles"
import { Link } from "gatsby"

const HeroSection = () => {
  return (
    <>
      <StyledSection>
        {/* <div className="hero-text"> */}
        <h1>THE FIRST MULTIPLAYER ONLINE NFT BATTLEGROUND</h1>
        <br />
        <Link to="#">
          <button className="btn-subscribe">SUBSCRIBE</button>
        </Link>
        {/* </div> */}
      </StyledSection>
    </>
  )
}

export default HeroSection
