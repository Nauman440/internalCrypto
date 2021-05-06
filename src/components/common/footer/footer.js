import React from "react"
import { Row, Col, Space } from "antd"
import styled from "styled-components"
import Medium from "../../../images/medium.png"
import Twitter from "../../../images/twitter.png"
import Telegram from "../../../images/telegram.png"

const StyledSection = styled.div`
  background: linear-gradient(180deg, #0c0726 0%, #110b34 100%);
  padding: 7rem 7rem 0.2rem 10rem;

  .bottom-text {
    margin-top: 1rem;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    color: #ffffff;
  }
  .line-bar {
    margin-top: 1rem;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightColor};
  }
  img {
    cursor: pointer;
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.md)} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`
const Footer = () => {
  const twitterLink = "https://twitter.com/battlesofcrypto"
  const mediumLink = "https://medium.com/@battlesofcrypto"
  const telegramLink = "https://t.me/battlesofcrypto"

  const gotoSocialPage = url => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer")
    if (newWindow) newWindow.opener = null
  }
  return (
    <StyledSection>
      <Row justify="center">
        <Space size={20}>
          <img
            src={Twitter}
            alt="twitter"
            onClick={() => gotoSocialPage(twitterLink)}
          />
          <img
            src={Medium}
            alt="medium"
            onClick={() => gotoSocialPage(mediumLink)}
          />
          <img
            src={Telegram}
            alt="telegram"
            onClick={() => gotoSocialPage(telegramLink)}
          />
        </Space>

        <div className="line-bar" />
        <p className="bottom-text">
          Copyright 2021. All Rights Reserved by Battles of Crypto
        </p>
      </Row>
    </StyledSection>
  )
}

export default Footer
