export const fetchProducts = async (limit, skip) => {
  try {
    const res1 = await fetch(
      `/api-dummy/products?limit=${limit}&skip=${skip}`,
    );
    if (!res1.ok) {
      throw new Error(`HTTP error! Status: ${res1.status}`);
    }
    const data1 = await res1.json();
    return data1;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchProductById = async (id) => {
  try {
    const res2 = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res2.ok) {
      throw new Error(`HTTP error! Status: ${res2.status}`);
    }
    const data2 = await res2.json();
    return data2;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const fetchCategories = async () => {
  try {
    const res3 = await fetch(`https://dummyjson.com/products/categories`,{
      
          method: 'GET',
          cache: 'no-cache'
      
    });
    if (!res3.ok) {
      throw new Error(`HTTP error! Status: ${res3.status}`);
    }
    const data3 = await res3.json();
    return data3;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category, limit = 20, skip = 0) => {
  try {
    const res5 = await fetch(
      `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`,{
          method: 'GET',
          cache: 'no-cache'
      }
    );
    if (!res5.ok) {
      throw new Error(`HTTP error! Status: ${res5.status}`);
    }
    const data5 = await res5.json();
    return data5;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export const searchProducts = async (query) => {
  try {
    const res4 = await fetch(
      `https://dummyjson.com/products/search?q=${query}`,
    );
    if (!res4.ok) {
      throw new Error(`HTTP error! Status: ${res4.status}`);
    }
    const data4 = await res4.json();
    return data4;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
