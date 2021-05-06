import React from "react"
import StyledSection from "./hero-section-styles"

const HeroSection = () => {
  const handleBackClick = () => {
    const titleElement = document.getElementById("subscribe")
    titleElement.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <StyledSection>
        <h1>THE FIRST MULTIPLAYER ONLINE NFT BATTLEGROUND</h1>
        <br />
        <button
          // onClick={() => scrollTo("#subscribe")}
          onClick={handleBackClick}
          className="btn-subscribe"
        >
          SUBSCRIBE
        </button>
      </StyledSection>
    </>
  )
}

export default HeroSection
