import React, { useEffect, useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const SHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: transparent;
  padding: 10px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  max-width: 930px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Column = styled.div`
  margin-left: 15px;
  margin-right: 15px;

  align-items: center;
`;

const Icon = styled.span`
  text-decoration: none;
  margin-left: 15px;
  img {
    width: 40px;
    height: 40px;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.p`
  font-size: 20px;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  margin-top: -10px;
`;

const Infomation = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  z-index: 10;
  max-width: 200px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255, 0.9);
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 20px solid transparent;
    border-bottom-color: rgba(255, 255, 255, 0.9);
    border-top: 0;
    margin-left: 5px;
    margin-top: -20px;
    left: 0;
    top: 0;
  }
  h1 {
    font-family: "Nanum", sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
  p {
    font-family: "Nanum", sans-serif;
    font-weight: 400;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Wrapper>
        <Column>
          <Icon>
            <Link
              activeClass='active'
              to='section1'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Logo className='ourlogo'>ATC</Logo>
            </Link>
          </Icon>
        </Column>
        <Column>
          <IconsContainer>
            <Icon>
              <Link
                activeClass='active'
                to='section2'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                <h1>로드맵</h1>
              </Link>
            </Icon>
            <Icon>
              <h1>작품들</h1>
            </Icon>
            <Icon>
              <h1>저희들</h1>
            </Icon>
          </IconsContainer>
        </Column>
      </Wrapper>
    </SHeader>
  );
};
