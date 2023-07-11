import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/pulse-logo.png";

const ContactContainer = styled.div`
  height: 80px;
  width: 100%;
  background-color: #344e41;
`;

const ContactInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-left: 10%;
  color: white;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-right: 10%;
  color: #a3b18a;
  font-weight: 500;
`;

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: #dad7cd;
`;

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
  gap: 30px;
  font-size: 18px;
  font-weight: 400;
  color: #344e41;
`;

const NavLinks = styled.p`
  &:hover {
    cursor: pointer;
    transition-duration: 0.5s;
    transform: scale(1.1);
  }
`;

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <ContactContainer>
        <ContactInner>
          <div>
            <img
              onClick={() => navigate("/home")}
              style={{ height: "50px" }}
              src={Logo}
            ></img>
          </div>
          <ContactInfo>
            <p>dawidpiechota@gmail.com</p>
            <p>000-000-000</p>
            <p>Mon-Sun: 10am - 3pm</p>
          </ContactInfo>
        </ContactInner>
      </ContactContainer>
      <NavContainer className="nav-container">
        <NavLinksContainer className="nav-links-container">
          <NavLinks onClick={() => navigate("/home")}>
            Air Conditioning
          </NavLinks>
          |
          <NavLinks onClick={() => navigate("/service")}>
            Service & Repairs
          </NavLinks>
          |<NavLinks onClick={() => navigate("/showcase")}>Our Work</NavLinks>|
          <NavLinks onClick={() => navigate("/stock")}>Stock</NavLinks>|
          <NavLinks onClick={() => navigate("/aboutus")}>About Us</NavLinks>
        </NavLinksContainer>
      </NavContainer>
    </>
  );
};
