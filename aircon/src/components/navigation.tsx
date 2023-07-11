import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

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
          <NavLinks onClick={() => navigate("/home")}>Home</NavLinks>
          <NavLinks onClick={() => navigate("/aboutus")}>About Us</NavLinks>
          <NavLinks onClick={() => navigate("/showcase")}>Our Work</NavLinks>
          <NavLinks onClick={() => navigate("/stock")}>Stock</NavLinks>
        </NavLinksContainer>
      </NavContainer>
    </>
  );
};
