import axios from "axios";

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
