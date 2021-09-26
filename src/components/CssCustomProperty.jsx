import './CssCustomProperty.css';
import CssValue from './CssValue';
import { THEME } from '../utils';

const CssCustomProperty = props => {
    const { cssCustomProperty } = props;
    const {
        type,
        propertyName,
        property,
        includeColours = [],
        value,
    } = cssCustomProperty;
    const themed = value?.constructor !== String && Object.keys(value).every(k => [THEME.LIGHT, THEME.DARK].includes(k));

    const values = themed ? Object.entries(value).sort((a, b) => a.theme > b.theme ? 1 : -1) : [[THEME.GLOBAL, value]];

    return (
        <fieldset className="css-custom-property">
            <legend className="css-custom-property-heading">{propertyName}</legend>
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
