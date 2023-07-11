import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/pulse-logo.png";

const NavContainer = styled.div`
  height: 50px;
  width: 100%;
  background-color: grey;
`;

const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
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
      <NavContainer className="nav-container">
        <NavLinksContainer className="nav-links-container">
          <img
            onClick={() => navigate("/home")}
            style={{ height: "50px" }}
            src={Logo}
          ></img>
          {/* <NavLinks onClick={() => navigate("/home")}>Home</NavLinks> */}
          <NavLinks onClick={() => navigate("/aboutus")}>About Us</NavLinks>
          <NavLinks onClick={() => navigate("/showcase")}>Our Work</NavLinks>
          <NavLinks onClick={() => navigate("/stock")}>Stock</NavLinks>
        </NavLinksContainer>
      </NavContainer>
    </>
  );
};
