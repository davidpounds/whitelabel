export const ACTION = Object.freeze({
    LOAD_STORE: 'LOAD_STORE',
    UPDATE_VALUE: 'UPDATE_VALUE',
});

export const loadStore = data => ({
    type: ACTION.LOAD_STORE,
    data,
});

export const updateValue = (theme, property, value) => ({
    type: ACTION.UPDATE_VALUE,
    data: {
        theme,
        property,
        value,
    },
});