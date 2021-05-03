import React from "react"
import styled from "styled-components"
import Pin from "../../../images/map-pin.png"
import Phone from "../../../images/phone.png"

const StyledBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .topbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 8px;
  }
  .nav-area-left li {
    margin-right: 15rem;
    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.lightColor};
      margin-left: 10px;
      :hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .nav-area-right li {
    margin-left: 15rem;

    & a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.lightColor};
      margin-left: 10px;
      :hover {
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  .line-bar {
    width: 60%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightColor};
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.lg)} {
    .line-bar {
      width: 90%;
    }
    .nav-area-left li {
      margin-right: 5rem;
    }
    .nav-area-right li {
      margin-left: 5rem;
    }
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.sm)} {
    .line-bar {
      width: 95%;
    }
    .nav-area-left li {
      margin-right: 2rem;
      & a {
        font-size: 11px;
        margin-left: 10px;
      }
    }
    .nav-area-right li {
      margin-left: 2rem;
      & a {
        font-size: 11px;
        margin-left: 10px;
      }
    }
  }
`

const Topbar = () => {
  return (
    <>
      <StyledBar>
        <div className="topbar">
          <div className="left-contents">
            <ul className="nav-area-left">
              <li>
                <span>
                  <img src={Pin} alt="map-icon" />
                  <a href="#">635, Saint James Drive</a>
                </span>
              </li>
            </ul>
          </div>

          <div className="right-contents">
            <ul className="nav-area-right">
              <li>
                <span>
                  <img src={Phone} alt="phone" />
                  <a href="#">+012 234564565</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="line-bar" />
      </StyledBar>
    </>
  )
}
export default Topbar
