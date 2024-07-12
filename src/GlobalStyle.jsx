import { createGlobalStyle } from "styled-components";

// Definir variables de estilo
const colors = {
  backgroundGradient: "linear-gradient(135deg, #262626, #f5f5f5)", // Degradado de gris oscuro a gris claro
  text: "#FFFFFF",
};

const fonts = {
  main: "'Roboto', sans-serif",
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${fonts.main};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  body {
    background: ${colors.backgroundGradient}; // Aplicación del fondo degradado
    color: ${colors.text};
    line-height: 1.6;
    font-size: 16px; // Tamaño de fuente base para el cuerpo del documento
  }

  a {
    text-decoration: none;
    color: ${colors.text};
    &:hover, &:focus {
      text-decoration: underline;
    }
  }

  button, input, select, textarea {
    font-family: inherit;
    font-size: 1em; // Tamaño de fuente base para elementos de formulario
    border-radius: 0.5rem; // Bordes redondeados para todos los elementos de formulario
    outline: none; // Eliminar borde de enfoque por defecto
    border: none; // Eliminar bordes por defecto de los elementos de formulario
    padding: 0.75rem 1rem; // Espaciado interno para elementos de formulario
  }

  // Accesibilidad: Añadir estilos para el enfoque
  *:focus {
    outline: 2px dashed ${colors.text};
    outline-offset: 2px;
  }
`;

export default GlobalStyle;

