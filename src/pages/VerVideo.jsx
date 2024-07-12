import { useEffect, useState } from "react";
import { buscar } from "../api/api";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { Btn } from "../components/UI";
import Footer from "../components/Footer";
import { colorGrayDark } from "../components/UI/variables";

const VerVideo = () => {
  const [video, setVideo] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    buscar(`/videos/${id}`, setVideo)
      .then((data) => {
        console.log("Datos del video:", data);
      })
      .catch(() => {
        console.log("Error al cargar el video");
      });
  }, [id]);

  return (
    <Section>
      <VerVideoContainer>
        <Portada
          src={`http://img.youtube.com/vi/${video.img}/maxresdefault.jpg`}
          alt={video.title}
        />
        <InfoContainer>
          <h1>{video.title}</h1>
          <Descripcion>{video.metadescription}</Descripcion>
          <Btn onClick={() => navigate(`/play/${id}`)}>Play</Btn>
        </InfoContainer>
      </VerVideoContainer>
      <Footer />
    </Section>
  );
};

export default VerVideo;

const Section = styled.section`
  background-color: ${colorGrayDark};
  height: auto;
`;

const VerVideoContainer = styled.div`
  min-height: 100vh;
  display: flex;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  color: #9e9e9e;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    height: 93.4vh;
  }
`;

const Portada = styled.img`
  width: 65%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  padding: inherit;
`;

const Descripcion = styled.p`
  white-space: pre-wrap;
`;

