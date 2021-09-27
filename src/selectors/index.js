export const getWhiteLabelName = state => state?.name ?? null;
export const getWhiteLabelSections = state => state?.sections ?? [];
export const getWhiteLabelCssCustomProperties = state => state?.cssCustomProperties ?? [];
export const getWhiteLabelCssCustomPropertiesForSection = sectionId => state => getWhiteLabelCssCustomProperties(state).filter(p => p.sectionId === sectionId);
export const getWhiteLabelCssCustomProperty = property => state => getWhiteLabelCssCustomProperties(state)?.find?.(p => p.property === property) ?? null;
