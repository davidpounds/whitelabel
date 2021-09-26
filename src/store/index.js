import { createStore } from 'redux';
import { ACTION } from '../actions';

const initialState = {};

const reducer = (state = initialState, action = null) => {
    switch (action.type) {
        case ACTION.LOAD_STORE:
            return {
                ...action.data,
            };
        case ACTION.UPDATE_VALUE:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
};

export default createStore(reducer);
