import { Navigation } from "../components/navigation";
import LivingRoomPhoto from "../assets/livingroom2.jpg";
import Roul1 from "../assets/roul1.jpg";
import Roul2 from "../assets/roul2.jpg";
import Roul3 from "../assets/roul3.jpg";
import styled from "styled-components";

const TopBackgroundDiv = styled.div`
  width: 100%;
  height: 850px;
  background-color: #344e41;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 100%;
  z-index: -1;
`;

const TitleTextContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 12%;
  gap: 5px;
  margin-left: 10%;
`;

const Title = styled.p`
  font-size: 40px;
  font-weight: 200;
`;

const CompanyTitle = styled.p`
  font-size: 70px;
  font-weight: 700;
  color: #344e41;
`;

const CompanySlogan = styled.p`
  font-size: 25px;
`;

const ContactText = styled.p`
  padding-top: 30px;
  font-size: 40px;
  font-weight: 500;
`;

const ImageRouletteDiv = styled.div`
  height: 400px;
  background-color: #dad7cd;
  display: flex;
  justify-content: space-between;
  padding: 15px;
`;

const ImageRoulette = styled.img`
  height: 400px;
  max-width: 550px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
`;

export const Home = () => {
  return (
    <>
      <Navigation />
      <div>
        <TopBackgroundDiv
          style={{ backgroundImage: `url(${LivingRoomPhoto})` }}
        >
          <TitleTextContainer>
            <Title>Air Conditioning</Title>
            <CompanyTitle>Company Name</CompanyTitle>
            <CompanySlogan>Done right for the right price</CompanySlogan>
            <ContactText>Contact Us: 000-000-000</ContactText>
          </TitleTextContainer>
        </TopBackgroundDiv>
        <ImageRouletteDiv>
          <ImageRoulette src={Roul1}></ImageRoulette>
          <ImageRoulette src={Roul2}></ImageRoulette>
          <ImageRoulette src={Roul3}></ImageRoulette>
        </ImageRouletteDiv>
      </div>
    </>
  );
};
