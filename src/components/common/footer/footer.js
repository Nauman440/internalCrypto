import React from "react";
import { Row, Col, Space } from "antd";
import styled from "styled-components";
import Fb from "../../../images/fb.png";
import Twitter from "../../../images/twitter.png";
import LinkedIn from "../../../images/linkedin.png";
import Mail from "../../../images/mail.png";

const StyledSection = styled.div`
  background: linear-gradient(180deg, #0c0726 0%, #110b34 100%);
  padding: 7rem 7rem 0.2rem 10rem;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    color: #ffffff;
    line-height: 75px;
  }

  p {
    font-size: 18px;
    line-height: 26px;
    color: #969696;
    cursor: pointer;
  }
  .bottom-text {
    margin-top: 1rem;
    font-size: 18px;
    line-height: 35px;
    text-align: center;
    color: #ffffff;
  }
  .line-bar {
    margin-top: 5rem;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.lightColor};
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.md)} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const Footer = () => {
  return (
    <StyledSection>
      <Row>
        <Col xs={24}>
          <h1>Pages</h1>
          <p>Legal</p>
          <p>Privacy Notice</p>
          <p>Cookie Preferences</p>
          <Row>
            <Space size={20}>
              <img src={Fb} alt="fb" />
              <img src={Twitter} alt="fb" />
              <img src={LinkedIn} alt="fb" />
              <img src={Mail} alt="fb" />
            </Space>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <div className="line-bar" />
        <p className="bottom-text">
          Copyright 2021. All Rights Reserved by Battles of Crypto
        </p>
      </Row>
    </StyledSection>
  );
};

export default Footer;
