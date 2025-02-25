import { SET_USER, CLEAR_USER } from '../actions/clientActions';

const initialState = {
  user: null,
  addressList: [],
  creditCards: [],
  roles: [],
  theme: "light",
  language: "en",
  loading: false,
  error: null
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        error: null
      };
    case "SET_ROLES":
      return { ...state, roles: action.payload };
    case "SET_THEME":
      return { ...state, theme: action.payload };
    case "SET_LANGUAGE":
      return { ...state, language: action.payload };
    case CLEAR_USER:
      return {
        ...state,
        user: null,
        error: null
      };
    default:
      return state;
  }
};

export default clientReducer;