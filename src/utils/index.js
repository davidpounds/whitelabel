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

export const isThemed = cssValue => cssValue?.constructor !== String && Object.keys(cssValue).every(k => [THEME.LIGHT, THEME.DARK].includes(k));

export const getThemedValues = cssValue => isThemed(cssValue) ? 
    Object.entries(cssValue).sort((a, b) => a.cssValue > b.cssValue ? 1 : -1) : 
    [[THEME.GLOBAL, cssValue]];
