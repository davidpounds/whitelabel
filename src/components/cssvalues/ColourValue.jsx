import './ColourValue.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getWhiteLabelCssCustomProperties } from '../../selectors';

const ColourValue = props => {
    const { id, theme, cssValue, updateHandler, property, includeColours = [] } = props;
    const cssCustomProperties = useSelector(getWhiteLabelCssCustomProperties);
    
    const getCssValueDetails = cssPropertyName => cssCustomProperties.find(ccp => ccp.property === cssPropertyName) ?? null;
    const getCssValue = cssPropertyName => getCssValueDetails(cssPropertyName)?.value?.[theme] ?? null;
    const showIncludeColours = Array.isArray(includeColours) && includeColours.length > 0;
    const useIncludedColour = showIncludeColours && includeColours.includes(cssValue); 
    const [customColourValue, setCustomColourValue] = useState(useIncludedColour ? getCssValue(cssValue) ?? '' : cssValue ?? '');

    useEffect(() => {
        setCustomColourValue(useIncludedColour ? getCssValue(cssValue) ?? '' : cssValue ?? '');
        // eslint-disable-next-line
    }, [useIncludedColour, cssValue, theme]);

    const showCustomColour = !showIncludeColours || !useIncludedColour;

    return (
        <>
            {showIncludeColours && includeColours.map(col => {
                const optName = getCssValueDetails(col)?.propertyName ?? col;
                return (
                    <div key={col} className="css-value-colour">
                        <input 
                            className="css-value-colour-radio"
                            type="radio" 
                            id={`radio${id}-${col}`}
                            name={`col-${id}`} 
                            value={col} 
                            checked={col === cssValue} 
                            onChange={updateHandler} 
                        />
                        <label htmlFor={`radio${id}-${col}`} className="css-value-colour-label">{optName}</label>
                        {/* <br />
                        <ColourItem 
                            customColourValue={getCssValue(col)}
                            property={col}
                            disabled={true}
                        /> */}
                    </div>
                );
            })}

            <div className="css-value-colour">
                {showIncludeColours && (
                    <>
                        <input 
                            className="css-value-colour-radio"
                            type="radio" 
                            id={`radio${id}-custom`}
                            name={`col-${id}`} 
                            value={customColourValue} 
                            checked={!useIncludedColour} 
                            onChange={updateHandler} 
                        />
                        <label htmlFor={`radio${id}-custom`} className="css-value-colour-label">Custom</label>
                        <br />
                    </>
                )}
                {showCustomColour && (
                    <ColourItem 
                        id={id}
                        theme={theme}
                        customColourValue={customColourValue}
                        updateHandler={updateHandler}
                        property={property}
                        disabled={useIncludedColour}
                    />
                )}
            </div>                
        </>
    );
};

const ColourItem = props => {
    const {
        id,
        theme,
        customColourValue,
        updateHandler,
        property,
        disabled,
    } = props;
    return (
        <span className="colour-item">
            <input 
                id={id}
                className="css-value-input"
                type="text" 
                data-theme={theme}
                value={customColourValue}
                onChange={updateHandler}
                size={7}
                disabled={disabled}
            />
            <span className="css-value-colour-swatch" style={{backgroundColor: `var(${property})`}}></span>
        </span> 
    );
};


export default ColourValue;
