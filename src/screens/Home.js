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
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    backgroundColor: "#e8e8e8",
    borderRadius: "20px",
  },
};

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
    height: 100vh;
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
  @media only screen and (max-width: 768px) {
    height: 150vh;
  }
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
  background: #f2f1ef;
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
    background-color: #eeeeee;
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
  padding: 10px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
    grid-auto-rows: 250px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const OurWork = styled.div`
  border-radius: 20px;
  background-color: #e8e8e8;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  cursor: pointer;
  img {
    width: 100%;
    max-height: 70%;
    background-color: white;
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
    padding: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    padding: 5px;
  }
`;

const OurWorkModal = styled.div`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  img {
    width: 320px;
  }
  h1 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 400;
    padding: 5px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    padding: 5px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  &:focus {
    outline: 0;
  }
  svg {
    color: #aaaaaa;
    font-size: 30px;
  }
  top: 3px;
  right: 3px;
`;

const AboutUsContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const AboutUsGrid = styled.div`
  display: grid;
  grid-auto-rows: 290px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  padding: 10px;

  @media only screen and (max-width: 768px) {
    gap: 10px;
    grid-auto-rows: 250px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const People = styled.div`
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 40px;
  max-width: 500px;
  border-radius: 20px;
  background-color: #e8ecf1;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  cursor: pointer;
  padding: 30px;
  img {
    width: 100%;
    max-height: 70%;
    background-color: white;
    padding: 10px;
  }
  h1 {
    font-size: 18px;
    font-weight: 400;
    padding: 10px;
  }
  p {
    font-size: 15px;
    font-weight: 300;
    padding: 14px;
  }
`;

export default function Home() {
  const [selectedWork, setSelectedWork] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const works = [
    {
      name: "직접 전하기 어려웠던 말들",
      def:
        "이 작품은 바로 여러분의 전하지 못했던 감사한 마음을 전할 수 있는 서비스입니다.",
      url: "https://hardtosay.netlify.app",
      imgUrl: "./hardtosay.png",
    },
    {
      name: "AI 자율주행차",
      def: "python으로 개발중인 AI 자율주행자동차입니다.",
      url: "https://github.com/yoonhero/OurAICar",
      imgUrl: "./aicar.jpeg",
    },
  ];
  useEffect(() => {
    if (selectedWork.length !== 0) {
      setIsOpen(true);
    }
  }, [selectedWork]);
  useEffect(() => {
    if (!modalIsOpen) {
      setSelectedWork([]);
    }
  }, [modalIsOpen]);
  return (
    <>
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
                  예정입니다. 도로를 따라가면서 주행하는 기능과 카메라로
                  장애물을 인식할 기능을 만들 예정입니다.
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
        <OurWorksContainer className='section3'>
          <Title>Works</Title>
          <OurWorksGrid>
            { works.map((work) => (
              <OurWork onClick={ () => setSelectedWork(work) }>
                <img src={ work?.imgUrl } alt='' />
                <div>
                  <h1>{ work?.name }</h1>
                  <p>{ work?.def }</p>
                </div>
              </OurWork>
            )) }
          </OurWorksGrid>
        </OurWorksContainer>
        <AboutUsContainer className='section4'>
          <Title>About Us</Title>

          <People>
            <img src='./solvit.png' alt='no' />
            <div>
              <h1>저희는 솔빛중학교 어코딩투동아리입니다.</h1>
              <p>
                저희는 보다 나은 삶을 만들기 위한 서비스를 제작하고 있습니다.
                꿈을 꾸는 건 쉽지만 이를 이루는 것은 어렵다고 생각합니다. 저희는
                이 꿈을 이루기위해 오늘도 노력하고 있습니다.
              </p>
              <a href='https://www.youtube.com/channel/UCLRcC3qP9gi5l1QUxBqHGjw'>
                <h3>atc yoonhero</h3>
              </a>
              <a href='https://www.youtube.com/channel/UCNRuCnPvdvpbgCmUrspweEw/videos'>
                <h3>닷냥 </h3>
              </a>
              <a href='https://www.youtube.com/channel/UCAaS7vALcXrjGlOFIY60uag'>
                <h3>atc gu</h3>
              </a>
            </div>
          </People>
        </AboutUsContainer>
      </Main>
      <Modal
        isOpen={ modalIsOpen }
        onRequestClose={ () => setIsOpen(false) }
        style={ customStyles }
        contentLabel='작품'>
        <OurWorkModal>
          <a href={ selectedWork?.url }>
            <div>
              <img src={ selectedWork?.imgUrl } alt='' />
            </div>
          </a>

          <div>
            <h1>{ selectedWork?.name }</h1>
            <p>{ selectedWork?.def }</p>
          </div>
        </OurWorkModal>
        <CloseButton onClick={ () => setIsOpen(false) }>
          <FontAwesomeIcon icon={ faTimes } />
        </CloseButton>
      </Modal>
    </>
  );
}
