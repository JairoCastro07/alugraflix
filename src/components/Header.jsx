import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar";
import { colorGrayDark, colorGrayLight, colorGrayLigther } from "./UI/variables";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAddVideoRoute = pathname === "/add-video";

  return (
    <HeaderContainer>
      <NavBar />
      {!isAddVideoRoute && (
        <BtnHeader onClick={() => navigate("/add-video")}>Nuevo Video</BtnHeader>
      )}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  width: 100%;
  height: 94px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.9rem;
  border-bottom: 1px solid rgba(0, 218, 255, 0.47);
  background-color: #262626;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 10;
  backdrop-filter: blur(15px);

  @media screen and (max-width: 768px) {
    justify-content: center;
    height: 6rem;
  }
`;

const BtnHeader = styled.button`
  width: 180px;
  height: 54px;
  background-color: ${colorGrayDark};
  color: ${colorGrayLight};
  border: 1px solid ${colorGrayLigther};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-family: "Roboto", sans-serif; /* Fuente Roboto */
  font-size: 1.6rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background-color: ${colorGrayLight};
    color: ${colorGrayDark};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 218, 255, 0.47);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;


