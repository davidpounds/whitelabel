import './CssCustomProperty.css';
import CssValue from './CssValue';
import { isThemed, getThemedValues } from '../utils';

const CssCustomProperty = props => {
    const { cssCustomProperty } = props;
    const {
        type,
        propertyName,
        property,
        includeColours = [],
        value,
    } = cssCustomProperty;

    const themed = isThemed(value);
    const values = getThemedValues(value);

    return (
        <fieldset className="css-custom-property">
            <legend className="css-custom-property-heading">
                {propertyName}
                <span className="css-custom-property-var">{property}</span>
            </legend>
            {values.map(([theme, cssValue]) => (
                <CssValue
                    key={theme}
                    type={type}
                    property={property}
                    theme={theme} 
                    themed={themed} 
                    includeColours={includeColours}
                    cssValue={cssValue} 
                />
            ))}
        </fieldset>
    );
};

export default CssCustomProperty;
