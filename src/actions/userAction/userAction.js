// actions.js
import { UPDATE_CLASS_DTO } from '../../constant/constant';

export const updateClassDTO = (data) => {
  return {
    type: UPDATE_CLASS_DTO,
    payload: { data }
  };
};
