import { useState, useEffect } from "react";
import { buscar } from "../../api/api";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const VideoLista = () => {
  const [videosPorCategoria, setVideosPorCategoria] = useState({});

  useEffect(() => {

    buscar("/videos", (videos) => {
      // Organizar los videos por categoría
      const videosCategorizados = videos.reduce((acc, video) => {
        const categoria = video.categoria.nombre.toUpperCase(); 

        if (!acc[categoria]) {
          acc[categoria] = [];
        }
        acc[categoria].push(video);
        return acc;
      }, {});

      // Establece el estado con los videos organizados por categoría
      setVideosPorCategoria(videosCategorizados);
    });
  }, []);

  // Configuración del carrousel de videos
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {Object.keys(videosPorCategoria).map((categoria) => {
        const videos = videosPorCategoria[categoria];
        return (
          <CategoriaContainer key={categoria}>
            <CategoriaTitulo color={videos[0].categoria.color}>
              {categoria}
            </CategoriaTitulo>
            <Slider {...settings}>
              {videos.map((video) => (
                <Link to={`/videos/${video.id}`} key={video.id}>
                  <VideoItem borderColor={video.categoria.color}>
                    <VideoImagen
                      src={`http://img.youtube.com/vi/${video.img}/maxresdefault.jpg`}
                      alt={video.title}
                    />
                  </VideoItem>
                </Link>
              ))}
            </Slider>
          </CategoriaContainer>
        );
      })}
    </>
  );
};

export default VideoLista;

// Estilos con styled-components
const CategoriaContainer = styled.div`
  margin-bottom: 2rem;
`;

const VideoItem = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: center;
  :hover {
    transform: scale(1.1);
  }
`;

const VideoImagen = styled.img`
  width: 97%;
  border: 3px solid ${(props) => props.borderColor};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  border-radius: 0.5rem; /* Bordes redondeados para el título */
`;

const CategoriaTitulo = styled.h3`
  text-align: center;
  width: 20%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  font-weight: 400;
  background-color: ${(props) => props.color};
  border-radius: 0.5rem; /* Bordes redondeados para el título */
`;
