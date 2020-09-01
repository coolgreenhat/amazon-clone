export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case 'ADD_TO_BASKET':
      return { 
        ...state,
      basket: [...state.basket, action.item]
     }
      break;
    case 'REMOVE_FROM_BASKET':
      //  cloned the basket
      let newBasket = [...state.basket];

      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

      if (index >= 0) {
        // item exists remove it
        newBasket.splice(index,1);
      }
      else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not present in a Basket`
        );
      }

      return {
        ...state,
        basket: newBasket
      };

    default:
      return state;
  }
} 

export default reducer;
