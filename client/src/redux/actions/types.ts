import { Dispatch } from 'redux';
import { ActionTypes } from './names';

export default function increment() {
  return function (dispatch: Dispatch) {
    return dispatch({ type: ActionTypes.INCREMENT });
  };
}
