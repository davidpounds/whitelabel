import { getThemedValues, THEME } from '../utils';

export const getWhiteLabelName = state => state?.name ?? null;
export const getWhiteLabelSections = state => state?.sections ?? [];
export const getWhiteLabelCssCustomProperties = state => state?.cssCustomProperties ?? [];
export const getWhiteLabelCssCustomPropertiesForSection = sectionId => state => getWhiteLabelCssCustomProperties(state).filter(p => p.sectionId === sectionId);
export const getWhiteLabelCssCustomProperty = property => state => getWhiteLabelCssCustomProperties(state)?.find?.(p => p.property === property) ?? null;

export const getWhiteLabelComputedCss = state => {
    const cssCustomProperties = getWhiteLabelCssCustomProperties(state);
    const mappedCssProperties = cssCustomProperties.reduce((mappedCss, cssCustomProperty) => {
        const {property, value} = cssCustomProperty;
        const themedValues = getThemedValues(value);
        const wrapCssValue = cssValue => cssValue.substr(0, 2) === '--' ? `var(${cssValue})` : cssValue;
        themedValues.forEach(([theme, cssValue]) => {
            if (cssValue === null) return;
            mappedCss[theme].push(`${property}: ${wrapCssValue(cssValue)};`);
        });
        return mappedCss;
    }, {[THEME.GLOBAL]: [], [THEME.LIGHT]: [], [THEME.DARK]: []});
    return `:root { ${mappedCssProperties[THEME.GLOBAL].join(' ')} } :root .${THEME.LIGHT} { ${mappedCssProperties[THEME.LIGHT].join(' ')} } :root .${THEME.DARK} { ${mappedCssProperties[THEME.DARK].join(' ')} }`;
};
