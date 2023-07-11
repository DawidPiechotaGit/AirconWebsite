import { Navigation } from "../components/navigation";
import LivingRoomPhoto from "../assets/livingroom.jpg";
import styled from "styled-components";

const TopBackgroundDiv = styled.div`
  width: 100%;
  height: 5000px;
  background-color: black;
  background-size: 100%;
  background-repeat: no-repeat;
  opacity: 70%;
`;

const TitleTextContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 10%;
  gap: 5px;
  margin-left: 20%;
`;

const CompanyTitle = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const CompanySlogan = styled.p`
  font-size: 15px;
`;

const ContactText = styled.p`
  padding-top: 20px;
  font-size: 15px;
  font-weight: 500;
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
            <p>Air Conditioning</p>
            <CompanyTitle>Company Name</CompanyTitle>
            <CompanySlogan>Done right for the right price</CompanySlogan>
            <ContactText>Contact Us: 000-000-000</ContactText>
          </TitleTextContainer>
        </TopBackgroundDiv>
      </div>
    </>
  );
};
