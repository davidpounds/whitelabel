export const CSS_VALUE_TYPE = Object.freeze({
    COLOUR: 'colour',
    LENGTH: 'length',
    PERCENTAGE: 'percentage',
    MULTIPLIER: 'multiplier',
    IMAGE: 'image',
});

export const THEME = Object.freeze({
    LIGHT: 'light',
    DARK: 'dark',
    GLOBAL: 'global',
});

export const makeUpperCaseFirstLetter = text => String(text).substr(0, 1).toUpperCase() + String(text).substr(1);
