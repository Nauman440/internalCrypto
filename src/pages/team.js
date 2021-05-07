import React from "react"
import styled from "styled-components"
import Navbar from "../components/common/navbar/Navbar"
import TeamDetails from "../components/team-page/team-details"

const StyledDiv = styled.div`
  background-color: #000;
  overflow: hidden;
`

const Team = () => {
  return (
    <>
      <StyledDiv>
        <Navbar />
        <TeamDetails />
      </StyledDiv>
    </>
  )
}

export default Team
