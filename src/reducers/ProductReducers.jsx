export const initialState = {
  products: [],
  loading: false,
  error: null,
  filters: {
    category: "all",
    search: "",
  },
  pagination: {
    currentPage: 1,
    totalProducts: 0,
    productsPerPage: 20,
  },
  sortBy: "default",
};
export const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  SET_PAGE: "SET_PAGE",
  SET_SEARCH: "SET_SEARCH",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SORT: "SET_SORT",
  RESET_FILTERS: "RESET_FILTERS",
};
export const productReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
        loading: false,
        pagination: {
          ...state.pagination,
          totalProducts: action.payload.totalProducts,
        },
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case ACTIONS.SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.payload,
        },
      };
    case ACTIONS.SET_SEARCH:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
        pagination: { ...state.pagination, currentPage: 1 },
      };
    case ACTIONS.SET_CATEGORY:
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload,
        },
        pagination: {
          ...state.pagination,
          currentPage: 1,
        },
      };
    case ACTIONS.SET_SORT:
      return { ...state, sortBy: action.payload };
    case ACTIONS.RESET_FILTERS:
      return {
        ...state,
        filters: {
          category: "all",
          price: 0,
          search: "",
        },
        pagination: { ...state.pagination, currentPage: 1 },
        sortBy: "default",
      };
    default:
      return {
        ...state,
      };
  }
};
