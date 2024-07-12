import Hero from "../components/Hero";
import styled from "styled-components";
import VideoLista from "../components/SliderElements/Videos";
import { colorGrayMedium } from "../components/UI/variables";
import Footer from "../components/Footer";

const HomeContainer = styled.main`
  background: ${colorGrayMedium}; /* Color de fondo medio gris */
`;

const ListVideos = styled.div`
  position: relative;
  background: linear-gradient(135deg, #262626, #f5f5f5); /* Degradado de fondo de gris oscuro a gris claro */
  color: #ffffff; /* Texto blanco */
  padding: 4rem;

  @media screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <ListVideos>
        <VideoLista />
      </ListVideos>
      <Footer />
    </HomeContainer>
  );
};

export default Home;

