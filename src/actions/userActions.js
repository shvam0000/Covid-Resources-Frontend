import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_DETIALS_REQUEST,
  USER_DETIALS_SUCCESS,
  USER_DETIALS_FAIL,
  USER_DETIALS_RESET,
} from "../constants/userConstants";

import axios from "axios";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/login",
      { username, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({ type: USER_DETIALS_RESET });
};

export const getUserDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_DETIALS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.get(`/api/users/getinfo`, config);

    dispatch({
      type: USER_DETIALS_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: USER_DETIALS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    dispatch({ type: USER_LOGOUT });
  }
};
