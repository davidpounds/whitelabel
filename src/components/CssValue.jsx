import './CssValue.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateValue } from '../actions';
import { getWhiteLabelCssCustomProperties } from '../selectors';
import { CSS_VALUE_TYPE, THEME, makeUpperCaseFirstLetter } from '../utils';

const CssValue = props => {
    const { 
        theme,
        themed,
        cssValue, 
        type,
        property,
        includeColours = [],
    } = props;
    const dispatch = useDispatch();
    const id = `id${property}-${theme}`;
    const labelText = themed ? 
        `${theme} theme` : 
        `${THEME.LIGHT} and ${THEME.DARK} themes`;
    const updateHandler = e => {
        console.log(e);
        dispatch(updateValue(theme, property, e.target.value));
    }
    const valueProps = {
        id,
        theme,
        cssValue,
        property,
        updateHandler,
    };

    let control = null;
    switch (type) {
        case CSS_VALUE_TYPE.COLOUR:
            control = <ColourValue {...valueProps} includeColours={includeColours} />;
            break;
        case CSS_VALUE_TYPE.IMAGE:
            control = <ImageValue {...valueProps} />;
            break;
        default:
            control = <TextValue {...valueProps} />;
    }

    return (
        <div className={`css-value ${theme} ${themed ? '' : 'not-themed'}`}>
            <label htmlFor={id} className="css-value-label">{makeUpperCaseFirstLetter(labelText)}</label>
            {control}
        </div>
    );
};

export default CssValue;

const ColourValue = props => {
    const { id, theme, cssValue, updateHandler, property, includeColours = [] } = props;
    const cssCustomProperties = useSelector(getWhiteLabelCssCustomProperties);
    const getCssValueDetails = cssPropertyName => cssCustomProperties.find(ccp => ccp.property === cssPropertyName) ?? null;
    const showIncludeColours = Array.isArray(includeColours) && includeColours.length > 0;
    const useIncludedColour = showIncludeColours && includeColours.includes(cssValue); 
    const [customColourValue, setCustomColourValue] = useState(useIncludedColour ? getCssValueDetails(cssValue)?.value?.[theme] ?? '' : cssValue ?? '');

    useEffect(() => {
        setCustomColourValue(useIncludedColour ? getCssValueDetails(cssValue)?.value?.[theme] ?? '' : cssValue ?? '');
        // eslint-disable-next-line
    }, [useIncludedColour, cssValue, theme]);

    return (
        <>
            {showIncludeColours && includeColours.map(col => {
                const optName = getCssValueDetails(col)?.propertyName ?? col;
                return (
                    <div key={col}>
                        <input type="radio" name={`col-${id}`} value={col} checked={col === cssValue} onChange={updateHandler} />
                        {optName}
                        <span className="css-value-colour-swatch" style={{backgroundColor: `var(${col})`}}></span>
                    </div>
                );
            })}

            <div>
                {showIncludeColours && (
                    <>
                        <input type="radio" name={`col-${id}`} value={customColourValue} checked={!useIncludedColour} onChange={updateHandler} />
                        Custom
                    </>
                )}
                <input 
                    id={id}
                    className="css-value-input"
                    type="text" 
                    data-theme={theme}
                    value={customColourValue}
                    onChange={updateHandler}
                    size={9}
                    disabled={useIncludedColour}
                />
                <span className="css-value-colour-swatch" style={{backgroundColor: `var(${property})`}}></span>
            </div>                
        </>
    );
};

const ImageValue = props => {
    const { id, theme, cssValue, updateHandler } = props;

    return (
        <input 
            id={id}
            className="css-value-input"
            type="file" 
            data-theme={theme}
            value={cssValue ?? ''}
            onChange={updateHandler}
        />
    );
};

const TextValue = props => {
    const { id, theme, cssValue, updateHandler } = props;

    return (
        <input 
            id={id}
            className="css-value-input"
            type="text" 
            data-theme={theme}
            value={cssValue ?? ''}
            onChange={updateHandler}
        />
    );
};
