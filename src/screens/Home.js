import {
  faArrowCircleRight,
  faCheck,
  faPaperPlane,
  faSpinner,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  faCheckCircle,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import Modal from "react-modal";

const Main = styled.div``;
const FirstPage = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 780px) {
    flex-direction: column;
  }
`;
const Title = styled.h1`
  color: black;
  font-size: 50px;
  font-weight: 800;
`;
const Side = styled.div`
  width: 50%;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-wrap: wrap;
  padding: 80px;
  @media only screen and (max-width: 780px) {
    width: 100%;
    max-width: 70%;
    padding: 30px;
  }
`;
const FirstPageImg = styled.img`
  max-width: 100%;
`;
export default function Home() {
  return (
    <Main>
      <FirstPage>
        <Side>
          <Title>안녕하세요?</Title>
          <Title>저희는 어코딩투코딩 동아리입니다.</Title>
        </Side>
        <Side>
          <FirstPageImg src='./eni.png' />
        </Side>
      </FirstPage>
    </Main>
  );
}
