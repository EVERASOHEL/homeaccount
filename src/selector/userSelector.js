// selectors.js
import { createSelector } from 'reselect';

// Input selectors
const getClassDTO = (state) => state.classDTO;

// Selector function
export const classDTO_Data = createSelector(
  getClassDTO,
  (classDTO) => classDTO
);
