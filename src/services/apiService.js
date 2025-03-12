import axios from "axios";

const API_URL = "https://fakestoreapi.com";

const apiService = {
  // Buscar todos os produtos
  getProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return [];
    }
  },

  // Buscar todas as categorias
  getCategories: async () => {
    try {
      const response = await axios.get(`${API_URL}/products/categories`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar categorias:", error);
      return [];
    }
  },

  // Buscar um produto específico pelo ID
  getProductById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
      return null;
    }
  }
};

export default apiService;
