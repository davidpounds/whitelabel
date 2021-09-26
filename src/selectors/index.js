import { createSelector } from 'reselect';

export const getWhiteLabelName = state => state?.name ?? null;
export const getWhiteLabelSections = state => state?.sections ?? [];

export const getWhiteLabelSection = sectionId => createSelector(
    [getWhiteLabelSections],
    (whiteLabelSections) => whiteLabelSections?.find?.(section => section?.sectionId === sectionId) ?? null,
);

export const getWhiteLabelCssCustomProperties = sectionId => createSelector(
    [getWhiteLabelSection],
    (whiteLabelSection) => whiteLabelSection?.cssCustomProperties ?? [],
);

