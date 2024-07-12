import axios from "axios";

// Crea una instancia de axios con la base de la API
export const api = axios.create({
  // Comenta esta url para usar en modo local
  baseURL: "https://fake-api-aluraflix-two.vercel.app",
  /* Quita el comentario de esta API para hacer pruebas CRUD
  deberás ejecutar el comando `json-server -w -p 5555 db.json` */
  // baseURL: "http://localhost:5555/",
});

// Función genérica para manejar errores
const handleRequestError = (error, errorMessage) => {
  console.error(errorMessage, error);
  throw error;
};

// Función genérica para realizar solicitudes HTTP
const makeRequest = async (method, url, data) => {
  try {
    const response = await api({ method, url, data });
    return response.data;
  } catch (error) {
    handleRequestError(error, `Error al realizar la solicitud ${method.toUpperCase()} a ${url}:`);
  }
};

// Función para realizar una búsqueda en la API
export const buscar = async (url, setData) => {
  const data = await makeRequest('get', url);
  if (data) setData(data);
};

// Función para obtener categorías desde la API
export const obtenerCategorias = () => makeRequest('get', '/categoria');

// Función para agregar una categoría a la API
export const agregarCategoria = (data) => makeRequest('post', '/categoria', data);

// Función para editar una categoría en la API
export const editarCategoria = (id, data) => makeRequest('put', `/categoria/${id}`, data);

// Función para eliminar una categoría de la API
export const eliminarCategoria = (id) => makeRequest('delete', `/categoria/${id}`);

// Función para agregar un video a la API
export const agregarVideo = (data) => makeRequest('post', '/videos', data);

