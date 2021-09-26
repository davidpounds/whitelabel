export const getWhiteLabelName = state => state?.name ?? null;
export const getWhiteLabelSections = state => state?.sections ?? [];
export const getWhiteLabelCssCustomProperties = state => state?.sections?.reduce?.((acc, section) => [
    ...acc, 
    ...section?.cssCustomProperties
], []) ?? [];
export const getWhiteLabelCssCustomProperty = property => state => getWhiteLabelCssCustomProperties(state)?.find?.(p => p.property === property);
