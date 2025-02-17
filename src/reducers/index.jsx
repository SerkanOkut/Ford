const initialState = { user: null, cart: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.payload] };
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default rootReducer;