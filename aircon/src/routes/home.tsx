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
  gap: 10px;
`;

const ImageRouletteContainer = styled.div`
  background-color: #a3b18a;
  position: relative;
  width: 50%;
  border-radius: 4px;
  &:hover {
    z-index: 0;
    cursor: pointer;
    transition-duration: 0.75s;
    transform: scale(1.01);
    filter: blur(2px);
  }
`;

const ImageRoulette = styled.img`
  display: block;
  height: 400px;
  max-width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 4px;
`;

const ImageHoverDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
`;

const ImageHoverText = styled.p`
  font-size: 30px;
  font-weight: 500;
  color: #344e41;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;

const FormWrapper = styled.div`
  height: 600px;
  width: 100%;
  background-color: #588157;
`;

const FormContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormInputContainer = styled.div`
  width: 200px;
`;

const FormInput = styled.input`
  border-radius: 4px;
  border: transparent;
  padding: 20px;
`;

const FormTextArea = styled.textarea`
  border-radius: 4px;
  border: transparent;
  height: 100px;
  width: 600px;
  width: 50px;
`;

const FormButton = styled.button`
  border-radius: 4px;
  border: transparent;
  padding: 20px;
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
          <ImageRouletteContainer>
            <ImageRoulette src={Roul1} />
            <ImageHoverDiv>
              <ImageHoverText>Our Service</ImageHoverText>
            </ImageHoverDiv>
          </ImageRouletteContainer>
          <ImageRouletteContainer>
            <ImageRoulette src={Roul2} />
            <ImageHoverDiv>
              <ImageHoverText>Our Work</ImageHoverText>
            </ImageHoverDiv>
          </ImageRouletteContainer>
          <ImageRouletteContainer>
            <ImageRoulette src={Roul3} />
            <ImageHoverDiv>
              <ImageHoverText>Our Product</ImageHoverText>
            </ImageHoverDiv>
          </ImageRouletteContainer>
        </ImageRouletteDiv>
        <FormWrapper>
          <FormContainer>
            <Form>
              <FormInputContainer>
                <FormInput type="text" placeholder="First Name"></FormInput>
                <FormInput type="text" placeholder="Surname"></FormInput>
              </FormInputContainer>
              <FormTextArea
                cols={50}
                rows={10}
                placeholder="Details"
              ></FormTextArea>
              <FormButton type="submit">Send</FormButton>
            </Form>
          </FormContainer>
        </FormWrapper>
      </div>
    </>
  );
};
