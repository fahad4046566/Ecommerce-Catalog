import axios from "axios";
 
const baseURL =  process.env.NODE_ENV === 'production'
  ? 'https://dummyjson.com' 
  : '/api-dummy';   

const apiClient = axios.create({  
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});



export const fetchProducts = async (limit, skip) => {
  try {
    const res1 = await apiClient.get(`/products?limit=${limit}&skip=${skip}`);
    return res1.data
  } catch (error) {
     console.error("Error fetching products:", error);
    throw error;
  }
}

export const fetchProductById = async (id) => {
  try {
    const res2 = await apiClient.get(`/products/${id}`)
    return res2.data
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}


export const fetchCategories = async () => {
try {
  const res3 = await apiClient.get(`/products/categories`);
  return res3.data
} catch (error) {
  console.error("Error fetching categories:", error);
  throw error
}
}


export const fetchProductsByCategory = async (category, limit = 20, skip = 0) => {
  try {
    const res5 = await apiClient.get(`/products/category/${category}?limit=${limit}&skip=${skip}`);
    return res5.data 
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
 
export const searchProducts = async (query) => {
  try {
    const res4 = await apiClient.get(`/products/search?q=${query}`);
    return res4.data
  } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
  }
}