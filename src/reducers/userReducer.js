// reducers.js
import { UPDATE_CLASS_DTO } from '../constant/constant';

const defaultClassDTO = {};
const initialState = {
  classDTO: { firstName: '' },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLASS_DTO:
      return {
        ...state,
        classDTO: action.payload.data || {}, // Ensure data is initialized
      };
    default:
      return state;
  }
};

export default userReducer;
