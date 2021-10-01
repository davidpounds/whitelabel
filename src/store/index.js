import { createStore } from 'redux';
import { ACTION } from '../actions';
import { THEME } from '../utils';

const initialState = {
    showPreview: true,
};

const reducer = (state = initialState, action = null) => {
    const { type = null, data = {} } = (action ?? {});
    const { property = null, showPreview = true, theme = null, value = null } = data;
    switch (type) {
        case ACTION.LOAD_STORE:
            return {
                ...state,
                ...data,
            };
        case ACTION.UPDATE_VALUE:
            const itemToUpdate = state?.cssCustomProperties?.find?.(item => item.property === property) ?? null;
            if (!itemToUpdate) return state;
            const itemIndex = state.cssCustomProperties.findIndex(item => item === itemToUpdate);
            const itemsBefore = state.cssCustomProperties.slice(0, itemIndex);
            const itemsAfter = state.cssCustomProperties.slice(itemIndex + 1, state.cssCustomProperties.length);
            const updatedItem = {
                ...itemToUpdate,
                ...(theme === THEME.GLOBAL) && { value },
                ...(theme !== THEME.GLOBAL) && {
                    value: {
                        ...itemToUpdate.value,
                        [theme]: value,
                    }
                }
            };
            return {
                ...state,
                cssCustomProperties: [
                    ...itemsBefore,
                    updatedItem,
                    ...itemsAfter,
                ]
            };
        case ACTION.SHOW_PREVIEW:
            return {
                ...state,
                showPreview,
            };
        default:
            return state;
    }
};

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
