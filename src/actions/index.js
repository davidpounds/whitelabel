export const ACTION = Object.freeze({
    LOAD_STORE: 'LOAD_STORE',
    UPDATE_VALUE: 'UPDATE_VALUE',
    SHOW_EDITOR: 'SHOW_EDITOR',
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

export const showEditor = (properties) => ({
    type: ACTION.SHOW_EDITOR,
    data: {
        properties,
    },
});
