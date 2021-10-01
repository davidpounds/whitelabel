import { getThemedValues, THEME, CSS_VALUE_TYPE } from '../utils';

export const getShowPreview = state => state?.showPreview ?? true;
export const getWhiteLabelName = state => state?.name ?? null;
export const getWhiteLabelSections = state => state?.sections ?? [];
export const getWhiteLabelCssCustomProperties = state => state?.cssCustomProperties ?? [];
export const getWhiteLabelCssCustomPropertiesForSection = sectionId => state => getWhiteLabelCssCustomProperties(state).filter(p => p.sectionId === sectionId);
export const getWhiteLabelCssCustomPropertiesForEditor = state => getWhiteLabelCssCustomProperties(state).filter(p => state?.editor?.properties?.includes?.(p.property));
export const getWhiteLabelCssCustomProperty = property => state => getWhiteLabelCssCustomProperties(state)?.find?.(p => p.property === property) ?? null;

export const getWhiteLabelComputedCss = state => {
    const cssCustomProperties = getWhiteLabelCssCustomProperties(state);
    const mappedCssProperties = cssCustomProperties.reduce((mappedCss, cssCustomProperty) => {
        const {property, value, type} = cssCustomProperty;
        const themedValues = getThemedValues(value);
        const wrapCssValue = cssValue => cssValue.substr(0, 2) === '--' ? `var(${cssValue})` : cssValue;
        themedValues.forEach(([theme, cssValue]) => {
            if (cssValue === null) {
                if (type === CSS_VALUE_TYPE.IMAGE) {
                    cssValue = ``;
                } else {
                    return;
                }
            }
            mappedCss[theme].push(`${property}: ${wrapCssValue(cssValue)};`);
        });
        return mappedCss;
    }, {[THEME.GLOBAL]: [], [THEME.LIGHT]: [], [THEME.DARK]: []});
    return `:root { ${mappedCssProperties[THEME.GLOBAL].join(' ')} } :root .${THEME.LIGHT} { ${mappedCssProperties[THEME.LIGHT].join(' ')} } :root .${THEME.DARK} { ${mappedCssProperties[THEME.DARK].join(' ')} }`;
};
