import styled from "styled-components"

const NavbarStyles = styled.nav`
  .logo {
    cursor: pointer;
    width: 110px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 35px;
    color: white;
    margin-top: 28px;
    cursor: pointer;
    text-transform: uppercase;
  }

  .mobile-menu {
    display: none;
  }
  .drawer-icon {
    float: right;
    margin-top: 2rem;
  }
  .btn-connect {
    width: 165px;
    height: 55px;
    background: rgba(255, 255, 255, 0.24);
    border: 1px solid rgba(255, 255, 255, 0.59);
    box-sizing: border-box;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #ffffff;
  }

  .btn-subscribe {
    width: 165px;
    height: 55px;
    background: #ffffff;
    border-radius: 5px;
    color: #132b50;
    cursor: pointer;
    font-weight: 500;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.15em;
    color: #132b50;
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.md)} {
    .desktop-menu {
      display: none;
    }
    .mobile-menu {
      display: block;
    }
  }
`

export default NavbarStyles
