import {
  ADD_RESOURCE_FAIL,
  ADD_RESOURCE_SUCCESS,
  ADD_RESOURCE_REQUEST,
} from "../constants/resourceConstants";

export const resourceAddReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_RESOURCE_REQUEST:
      return { loading: true };
    case ADD_RESOURCE_SUCCESS:
      return { loading: false, resourceStatus: true };
    case ADD_RESOURCE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
