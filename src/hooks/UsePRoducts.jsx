import {
  initialState,
  productReducer,
  ACTIONS,
} from "@/reducers/ProductReducers";
import {
  fetchProducts,
  searchProducts,
  fetchProductsByCategory,
} from "../Services/api";
import React, { useEffect, useReducer } from "react";

const UsePRoducts = () => {
  const [state, dispatch] = useReducer( productReducer,initialState);

  useEffect(() => {
    
  const fetchData = async () => {
    const skip = (state.pagination.currentPage - 1) * state.pagination.productsPerPage;
 
    try {
      dispatch({ type: ACTIONS.FETCH_START });
      
      let result;
      if (state.filters.search) {
        result = await searchProducts(state.filters.search);
      } else if (state.filters.category !== "all") {
        result = await fetchProductsByCategory(state.filters.category);
      } else {
        result = await fetchProducts(state.pagination.productsPerPage, skip);
      }

      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: result });
      
    } catch (error) {
      dispatch({ type: ACTIONS.FETCH_ERROR, payload: error.message || "Failed to fetch" });
    }
  };
  
  fetchData();
}, [state.pagination.currentPage, state.filters.search, state.filters.category]);


  const setPage = (page) => {
    dispatch({ type: ACTIONS.SET_PAGE, payload: page });
  };
  const setSearch = (query) => {
    dispatch({ type: ACTIONS.SET_SEARCH, payload: query });
  };
  const setCategory = (category) => {
    dispatch({type:ACTIONS.SET_CATEGORY , payload:category})
  }
  const setSort = (sortType) => {
  dispatch({ type: ACTIONS.SET_SORT, payload: sortType });
};
 const resetFilters = () => {
    dispatch({type:"RESET_FILTERS"})
  }
  const sortedProducts = [...state.products].sort((a, b) => {
  switch(state.sortBy) {
    case 'price-asc':
      return a.price - b.price
    case 'price-desc':
      return b.price - a.price
    case 'rating':
      return b.rating - a.rating
    default:
      return 0
  }
})

  return {
    products:sortedProducts,
    loading :state.loading,
    error:state.error,
    currentPage: state.pagination.currentPage,
    totalProducts: state.pagination.totalProducts,
    productsPerPage: state.pagination.productsPerPage,
    setPage,
    setSearch,
    setCategory,
    setSort,
    category:state.filters.category,
    resetFilters
  };
};

export default UsePRoducts;
