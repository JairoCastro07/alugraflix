import styled from "styled-components";
import {
  colorGrayLigther,
  colorGrayLight,
  colorPrimario,
} from "./variables";

export const Btn = styled.button`
  width: 18rem;
  height: 5.4rem;
  flex-shrink: 0;
  text-align: center;
  font-family: "Roboto";
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.variant === "blue" ? colorPrimario : "#dedede")};
  color: ${(props) => (props.variant === "blue" ? "#f5f5f5" : "#000000")};
  transition: all 0.3s ease;

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.size === "full" ? "320px" : "14rem")};
    font-size: 1.5rem;
  }

  &:hover {
    background-color: ${(props) => (props.variant === "blue" ? "#1e6de5" : "#c0c0c0")};
    transform: scale(1.05);
  }
`;

/* Elementos del formulario */

export const Container = styled.div`
  height: auto;
  min-height: 100vh;
  color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormularioTitulo = styled.h2`
  text-align: center;
  font-family: Roboto;
  font-size: 3rem;
  font-weight: 400;
  line-height: normal;
  padding: 4rem 0;
`;

export const ElementosFormulario = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86%;
  justify-content: space-evenly;
  padding-top: 4rem;
  min-height: 70vh;

  @media screen and (max-width: 768px) {
    gap: 2rem;
  }
`;

export const TextoLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-family: Roboto;
  font-size: 1.8rem;
  font-weight: 300;
  padding: 1rem 2rem;
  margin-bottom: 3px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CajaInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0.5rem 0;
`;

export const ContainerInput = styled.div`
  background-color: ${colorGrayLight};
  align-items: center;
  border-radius: 0px 0px 4px 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Select = styled.select`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  font-size: 1.9rem;
  color: white;
  padding: 1rem;
  outline: none;
  border: none;
  background: #3e3e3e;
  font-weight: 800;
`;

export const TextAreaWrapper = styled.textarea`
  width: 100%;
  height: 120px;
  border: none;
  padding: 8px;
  font-size: 16px;
  outline: none;
  resize: none;
  background-color: ${colorGrayLight};
  color: ${colorGrayLigther};

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const BarraError = styled.span`
  border-bottom: 3px solid;
  border-color: ${(props) => (props.variant === "red" ? "#ff6347" : colorPrimario)};
  width: 100%;
`;

export const SpanMensaje = styled.span`
  color: ${(props) => (props.variant === "red" ? "#ff6347" : colorPrimario)};

  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const CajaBotones = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10rem;
  padding: 0;
  justify-content: center;

  @media screen and (max-width: 678px) {
    margin-top: 2rem;
  }
`;

export const ContenedorBotones = styled.div`
  display: flex;
  justify-content: space-between;
  width: 69%;
  align-items: center;
  padding: 5rem 0 2rem 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 0;
    width: 100%;
  }
`;

export const EviarLimpiar = styled.div`
  display: flex;
  align-items: center;
  padding: 0;
  width: 50%;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    align-items: center;
    display: flex;
    margin-top: 10rem;
    padding: 13px;
    width: 100%;
    justify-content: space-evenly;
    gap: 1rem;
  }
`;

export const InputSubmit = styled.input`
  color: ${colorGrayLigther};
  width: 18rem;
  height: 5.4rem;
  flex-shrink: 0;
  text-align: center;
  font-family: "Roboto";
  font-size: 1.8rem;
  font-weight: 500;
  border: none;
  border-radius: 0.5rem;
  margin: 0.5rem 0;
  background-color: ${colorPrimario};

  @media screen and (max-width: 768px) {
    width: 14rem;
    font-size: 1.5rem;
  }
`;
