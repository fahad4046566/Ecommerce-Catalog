export const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};
export const ACTIONS = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  UPDATE_QUANTITY: "UPDATE_QUANTITY",
  CLEAR_CART: "CLEAR_CART",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      const itemToAdd = action.payload;
      const existingItem = state.items.find((item) => item.id === itemToAdd.id);
      if (existingItem) {
        return {
          ...state,
           totalItems: state.totalItems + 1,
          items: state.items.map((item) =>
            item.id === itemToAdd.id
              ? { ...item, totalItems: item.totalItems + 1 }
              : item,
          ),
        };
      } else {
        return {
          ...state,
           totalItems: state.totalItems + 1,
          items: [...state.items, { ...itemToAdd, totalItems: 1 }],
        };
      }

    case ACTIONS.REMOVE_FROM_CART:
      const findItem = state.items.filter(
        (item) => item.id !== action.payload.id,
      );
      return {
        ...state,
        items: findItem,
      };
    case ACTIONS.CLEAR_CART:
      return {
        ...state,
        items: [],
         totalItems: 0,
      };
    case ACTIONS.UPDATE_QUANTITY:
      const itemToCheck = action.payload;
      return {
        ...state,
        items: state.items.map((elem) => {
          if (elem.id === itemToCheck.id) {
            if (itemToCheck.type === "INC") {
              return { ...elem, totalItems: elem.totalItems + 1 };
            } else if (itemToCheck.type === "DEC" && elem.totalItems > 1) {
              return { ...elem, totalItems: elem.totalItems - 1 };
            }
          }
          return elem;
        }),
      };

    default:
      return {
        ...state,
      };
  }
};
