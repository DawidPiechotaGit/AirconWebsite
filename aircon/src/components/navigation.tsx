import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/pulse-logo.png";

const ContactContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: black;
`;

const ContactInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-left: 20%;
  color: white;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-right: 20%;
  color: white;
`;

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: grey;
`;

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const NavLinks = styled.p`
  &:hover {
    cursor: pointer;
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
          <NavLinks onClick={() => navigate("/home")}>Home</NavLinks>|
          <NavLinks onClick={() => navigate("/aboutus")}>About Us</NavLinks>|
          <NavLinks onClick={() => navigate("/showcase")}>Our Work</NavLinks>|
          <NavLinks onClick={() => navigate("/stock")}>Stock</NavLinks>
        </NavLinksContainer>
      </NavContainer>
    </>
  );
};
