import {
  ADD_RESOURCE_FAIL,
  ADD_RESOURCE_SUCCESS,
  ADD_RESOURCE_REQUEST,
} from "../constants/resourceConstants";

import axios from "axios";

export const add = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_RESOURCE_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.post("/api/writedata", formData, config);

    dispatch({
      type: ADD_RESOURCE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ADD_RESOURCE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
