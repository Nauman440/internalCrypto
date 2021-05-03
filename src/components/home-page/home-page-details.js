import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import NFT from "../../images/nft.png";

const StyledSection = styled.section`
  padding: 7rem 7rem 7rem 7rem;
  background: #0c0726;
  h1 {
    font-weight: 900;
    font-size: 55px;
    line-height: 50px;
    color: #ffffff;
    overflow: hidden;
  }
  p {
    font-size: 18px;
    line-height: 32px;
    color: #c4c4c4;
    overflow: hidden;
  }
  img {
    width: 100%;
    height: auto;
    background: radial-gradient(
      41.89% 43.47% at 49.27% 46.49%,
      rgba(12, 7, 38, 0) 0%,
      rgba(12, 7, 38, 0.121141) 26.64%,
      rgba(12, 7, 38, 0.170062) 42.59%,
      rgba(12, 7, 38, 0.209553) 62.35%,
      #0c0726 100%
    );
  }
  ${({ theme: { down, breakpoints } }) => down(breakpoints.lg)} {
    padding: 3rem 3rem 3rem 3rem;
  }
  ${({ theme: { down, breakpoints } }) => down(breakpoints.md)} {
    padding: 3rem 2rem 3rem 2rem;

    h1 {
      font-weight: 900;
      font-size: 45px;
      line-height: 40px;
    }
  }
  ${({ theme: { down, breakpoints } }) => down(breakpoints.sm)} {
    padding: 3rem 1rem 3rem 1rem;
    h1 {
      font-weight: 900;
      font-size: 28px;
      line-height: 40px;
    }
  }
`;

const DetailsSection = () => {
  return (
    <StyledSection>
      <Row gutter={32} align="middle">
        <Col md={14}>
          <h1>Cross platform playable NFT’s</h1>
          <p>
            The first multiplayer online battleground with cross platform NTF’s
            all playable in a five versus five strategic battleground. Battle
            your way to victory, rank up and earn coins. Trade NFT’s, play NFT’s
            all through one platform.
          </p>
        </Col>
        <Col md={10}>
          <div className="image-background">
            <img alt="nft" src={NFT} />
          </div>
        </Col>
      </Row>
    </StyledSection>
  );
};

export default DetailsSection;
