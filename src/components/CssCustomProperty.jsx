import './CssCustomProperty.css';

const CssCustomProperty = props => {
    const { cssCustomProperty } = props;
    const {
        // type,
        propertyName,
        // property,
        // includeColours = [],
        value,
    } = cssCustomProperty;
    const themed = value?.constructor !== String && Object.keys(value).length === 2;

    const values = themed ? Object.entries(value) : [["global", value]];

    return (
        <>
            <h3 className="css-custom-property-heading">{propertyName}</h3>
            {values.map(([theme, cssValue]) => (
                <input 
                    key={theme}
                    type="text" 
                    className={themed ? '' : 'not-themed'} 
                    data-theme={theme}
                    value={cssValue ?? ''}
                />
            ))}
        </>
    );
};

export default CssCustomProperty;
