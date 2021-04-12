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
  height: 95vh;
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
const RoadMapContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const TimeLineContainer = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 70%;
  left: 15%;
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    left: -17px;
    background-color: white;
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }
  &::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }
`;
const TimeLineContent = styled.div`
  padding: 20px 30px;
  background-color: black;
  position: relative;
  border-radius: 20px;
  background: #e0e0e0;
  box-shadow: 10px 10px 20px #c5c5c5, -10px -10px 20px #fbfbfb;
  h2 {
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
  }
  p {
    font-family: "Nanum Gothic", sans-serif;
    font-size: 15px;
    padding: 5px;
  }
`;
const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
  &::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: #aaaaaa;
    top: 0;
    bottom: 0;
    left: 15%;
    margin-left: -3px;
  }
`;

const OurWorksContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const OurWorksGrid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  @media only screen and (max-width: 768px) {
    gap: 0;
  }
`;

const OurWork = styled.div`
  background-color: red;
`;

export default function Home() {
  return (
    <Main>
      <FirstPage className='section1'>
        <Side>
          <Title>안녕하세요?</Title>
          <Title>저희는 어코딩투코딩 동아리입니다.</Title>
        </Side>
        <Side>
          <FirstPageImg src='./eni.png' />
        </Side>
      </FirstPage>
      <RoadMapContainer className='section2'>
        <Title>RoadMap</Title>

        <Timeline>
          <TimeLineContainer>
            <TimeLineContent>
              <h2>2021.4 자율주행차 제작</h2>
              <p>
                라즈베리파이를 이용해서 python으로 자율자동차를 개발할
                예정입니다. 도로를 따라가면서 주행하는 기능과 카메라로 장애물을
                인식할 기능을 만들 예정입니다.
              </p>
            </TimeLineContent>
          </TimeLineContainer>
          <TimeLineContainer>
            <TimeLineContent>
              <h2>2021.5 자율주행드론 제작</h2>
              <p>
                tello 드론을 활용해서 사람을 따라가는 자율주행드론을 제작할
                예정입니다. 이 드론으로 마스크를 쓰지 않는 사람들을 구별할
                예정입니다.
              </p>
            </TimeLineContent>
          </TimeLineContainer>
          <TimeLineContainer>
            <TimeLineContent>
              <h2>2021.5 ~ 6 로켓제작</h2>
              <p>
                에어로켓을 활용하여 수직착륙 로켓을 만들 예정입니다. 떨어질때
                낙하산이 펴지고 꼬리날개로 안전하게 착륙할 예정입니다.
              </p>
            </TimeLineContent>
          </TimeLineContainer>
          <TimeLineContainer>
            <TimeLineContent>
              <h2>2021.6 ~ 11 팀프로젝트 실시 </h2>
              <p>
                저희가 만들고 싶었던 것들을 만들려고 합니다. 더 많은 사람이
                편리하고 더 나은 삶을 살 수 있는 서비스를 제작할 예정입니다.
              </p>
            </TimeLineContent>
          </TimeLineContainer>
        </Timeline>
      </RoadMapContainer>
      <OurWorksContainer>
        <Title>Works</Title>
        <OurWorksGrid>
          <OurWork>
            <h1>title</h1>
            <div>info</div>
          </OurWork>
          <OurWork>
            <h1>title</h1>
            <div>info</div>
          </OurWork>
          <OurWork>
            <h1>title</h1>
            <div>info</div>
          </OurWork>
          <OurWork>
            <h1>title</h1>
            <div>info</div>
          </OurWork>
          <OurWork>
            <h1>title</h1>
            <div>info</div>
          </OurWork>
        </OurWorksGrid>
      </OurWorksContainer>
    </Main>
  );
}
