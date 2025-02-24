import axios from "axios";

// Login action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CLEAR_USER = 'CLEAR_USER';

// Login actions
const loginRequest = () => ({
  type: LOGIN_REQUEST
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
});

export const logout = () => {
  localStorage.removeItem('token');
  return { type: LOGOUT };
};

// Thunk action for login
export const loginUser = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('/login', credentials);
    
    if (credentials.rememberMe) {
      localStorage.setItem('token', response.data.token);
    }
    
    dispatch({
      type: 'SET_USER',
      payload: response.data.user
    });
    
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Login failed. Please try again.'
    };
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'CLEAR_USER' });
};

export const fetchRoles = () => async (dispatch, getState) => {
  if (getState().client.roles.length > 0) return; // Roller varsa tekrar çekme

  try {
    const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/roles");
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Error fetching roles:", error);
  }
};

export const setUser = (user) => ({ type: "SET_USER", payload: user });
export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language });
