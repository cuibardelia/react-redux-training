import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      return [...state,
      Object.assign({}, action.course)
      ]; //not correct state.push(action.course) return state;

    default:
      return state;
  }
}
