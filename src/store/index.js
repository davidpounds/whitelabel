import { createStore } from 'redux';
import { ACTION } from '../actions';

const initialState = {};

const reducer = (state = initialState, action = null) => {
    const { type, data } = action;
    switch (type) {
        case ACTION.LOAD_STORE:
            return {
                ...data,
            };
        case ACTION.UPDATE_VALUE:
            const { property, value } = data;
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default createStore(reducer);
