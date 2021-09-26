import './CssValue.css';
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
    const id = `id${property}-${theme}`;
    const labelText = themed ? 
        `${theme} theme` : 
        `${THEME.LIGHT} and ${THEME.DARK} themes`;
    const valueProps = {
        id,
        theme,
        cssValue,
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
        <div className={`css-value ${themed ? '' : 'not-themed'}`}>
            <label htmlFor={id} className="css-value-label">{makeUpperCaseFirstLetter(labelText)}</label>
            {control}
        </div>
    );
};

export default CssValue;

const ColourValue = props => {
    const { id, theme, cssValue, includeColours = [] } = props;

    const showIncludeColours = Array.isArray(includeColours) && includeColours.length > 0;

    return (
        <>
            {showIncludeColours && (
                <select value={cssValue ?? ''}>
                    {includeColours.map(col => {
                        return <option value={col}>{col}</option>
                    })}
                </select>
            )}
            <input 
                id={id}
                className="css-value-input"
                type="color" 
                data-theme={theme}
                value={cssValue ?? ''}
            />
        </>
    );
};

const ImageValue = props => {
    const { id, theme, cssValue } = props;

    return (
        <input 
            id={id}
            className="css-value-input"
            type="file" 
            data-theme={theme}
            value={cssValue ?? ''}
        />
    );
};

const TextValue = props => {
    const { id, theme, cssValue } = props;

    return (
        <input 
            id={id}
            className="css-value-input"
            type="text" 
            data-theme={theme}
            value={cssValue ?? ''}
        />
    );
};
