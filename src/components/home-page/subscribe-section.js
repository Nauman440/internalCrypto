import { Row, Col } from "antd"
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
    cursor: pointer;
  }

  .form-row {
    background: #fff;
    height: 75px;
    padding-left: 8px;
    padding-right: 4px;
    border-radius: 8px;
    overflow: hidden;
  }

  h1 {
    font-size: 45px;
    line-height: 65px;
    text-align: center;
    color: #ffffff;
    overflow: hidden;
  }

  input {
    width: 100%;
    padding: 25px 60px;
    border: none;
    text-align: start;
    font-size: 18px;

    :focus {
      outline: none;
    }
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
    input {
      width: 100%;
      padding: 25px 30px;
    }
  }
  ${({ theme: { down, breakpoints } }) => down(breakpoints.xs)} {
    input {
      padding: 10px 1px;
    }
    .form-row {
      background: #fff;
      height: 50px;
      padding-left: 6px;
      padding-right: 4px;
      border-radius: 4px;
    }

    .input-button {
      width: 100px;
      height: 40px;
    }
  }
`
const SubscribeSection = () => {
  return (
    <StyledSection url={Hero} id="subscribe">
      <div className="overlayone">
        <div className="overlaytwo">
          <h1>BE THE FIRST TO KNOW WHEN WE LAUNCH</h1>
          <Row justify="center">
            <form action="https://formspree.io/f/myylklke" method="POST">
              {/* <form action="https://formspree.io/f/xrgrezgy" method="post"> */}
              <Row justify="center" align="middle" className="form-row">
                <Col>
                  <img src={Mail} alt="mail" />
                </Col>
                <Col>
                  <input
                    required
                    type="text"
                    name="Email"
                    id="email"
                    type="email"
                    placeholder="Enter Email Address"
                  />
                </Col>
                <Col>
                  <button className="input-button" type="submit">
                    SUBSCRIBE
                  </button>
                </Col>
              </Row>
            </form>
            {/* <Form
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              method="POST"
              action="https://formspree.io/f/xrgrezgy"
            >
              <Form.Item
                name="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input
                  name="Email"
                  id="email"
                  type="email"
                  placeholder="Enter Email Address"
                  prefix={<img src={Mail} alt="mail" />}
                  suffix={<button className="input-button">SUBSCRIBE</button>}
                />
              </Form.Item>
            </Form> */}
          </Row>
        </div>
      </div>
    </StyledSection>
  )
}

export default SubscribeSection
