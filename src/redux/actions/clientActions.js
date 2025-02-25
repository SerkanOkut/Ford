import axios from "axios";

// Login action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const CLEAR_USER = 'CLEAR_USER';
export const SET_USER = 'SET_USER';

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
    const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/login', credentials);
    
    const { token, user } = response.data;
    
    if (credentials.rememberMe) {
      localStorage.setItem('token', token);
    }
    
    // Set token for all future requests
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
    dispatch(setUser(user));
    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || 'Login failed. Please check your credentials.'
    };
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  delete axios.defaults.headers.common['Authorization'];
  dispatch(clearUser());
};

export const checkAuthStatus = () => (dispatch) => {
  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    // You might want to verify the token with your backend here
    // For now, we'll just set the headers
  }
};

export const setUser = (user) => ({ type: SET_USER, payload: user });
export const clearUser = () => ({ type: CLEAR_USER });

export const fetchRoles = () => async (dispatch, getState) => {
  if (getState().client.roles.length > 0) return; // Roller varsa tekrar çekme

  try {
    const response = await axios.get("https://workintech-fe-ecommerce.onrender.com/roles");
    dispatch(setRoles(response.data));
  } catch (error) {
    console.error("Error fetching roles:", error);
  }
};

export const setRoles = (roles) => ({ type: "SET_ROLES", payload: roles });
export const setTheme = (theme) => ({ type: "SET_THEME", payload: theme });
export const setLanguage = (language) => ({ type: "SET_LANGUAGE", payload: language });
