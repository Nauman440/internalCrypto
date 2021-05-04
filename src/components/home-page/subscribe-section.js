import { Row, Input } from "antd"
import React from "react"
import styled from "styled-components"
import Hero from "../../images/hero2.png"
import Mail from "../../images/mail2.png"

const StyledSection = styled.div`
  background-image: url(${props => props.url});
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  overflow: hidden;
  height: 50vh;

  .overlayone {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270.24deg,
      #0c0726 0.25%,
      rgba(12, 7, 38, 0.5) 24.05%,
      rgba(12, 7, 38, 0.63) 51.06%,
      rgba(12, 7, 38, 0.5) 77.53%,
      #0c0726 99.83%
    );
  }
  .overlaytwo {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      181.04deg,
      #0c0726 5.83%,
      rgba(12, 7, 38, 0.12) 29.02%,
      rgba(12, 7, 38, 0.19) 48.98%,
      rgba(12, 7, 38, 0.24) 71.02%,
      #0c0726 94.08%
    );
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .input-button {
    width: 180px;
    height: 65px;
    background: #940e88;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;
  }
  .ant-input-affix-wrapper {
    background: #ffffff;
    box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.4);
    border-radius: 8px;
    padding-right: 4px;
    width: 600px;
  }
  .ant-input {
    font-size: 22px;
    color: #676767;
  }

  h1 {
    font-size: 45px;
    line-height: 65px;
    text-align: center;
    color: #ffffff;
    overflow: hidden;
  }

  ${({ theme: { down, breakpoints } }) => down(breakpoints.md)} {
    height: 60vh;

    .overlayone {
      background: linear-gradient(
        181.04deg,
        #0c0726 5.83%,
        rgba(12, 7, 38, 0.12) 29.02%,
        rgba(12, 7, 38, 0.19) 48.98%,
        rgba(12, 7, 38, 0.24) 71.02%,
        #0c0726 94.08%
      );
    }
    .overlaytwo {
      background: linear-gradient(
        181.04deg,
        #0c0726 5.83%,
        rgba(12, 7, 38, 0.12) 29.02%,
        rgba(12, 7, 38, 0.19) 48.98%,
        rgba(12, 7, 38, 0.24) 71.02%,
        #0c0726 94.08%
      );
    }
    .ant-input-affix-wrapper {
      width: 80%;
    }
    .input-button {
      width: 120px;
      font-size: 16px;
    }
  }
  ${({ theme: { down, breakpoints } }) => down(breakpoints.sm)} {
    h1 {
      font-size: 28px;
      line-height: 33px;
    }
    .ant-input-affix-wrapper {
      width: 90%;
      height: 60px;
    }
    .ant-input {
      font-size: 16px;
    }
  }
`
const SubscribeSection = () => {
  return (
    <StyledSection url={Hero}>
      <div className="overlayone">
        <div className="overlaytwo">
          <h1>BE THE FIRST TO KNOW WHEN WE LAUNCH</h1>
          <Row justify="center">
            <Input
              id="subscribe"
              placeholder="Enter Email Address"
              prefix={<img src={Mail} alt="mail" />}
              suffix={<button className="input-button">SUBSCRIBE</button>}
            />
          </Row>
        </div>
      </div>
    </StyledSection>
  )
}

export default SubscribeSection
