import './CssValue.css';
import { useDispatch } from 'react-redux';
import { updateValue } from '../actions';
import { CSS_VALUE_TYPE, THEME, makeUpperCaseFirstLetter } from '../utils';
import ColourValue from './cssvalues/ColourValue';
import ImageValue from './cssvalues/ImageValue';
import TextValue from './cssvalues/TextValue';

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
    const updateHandler = e => dispatch(updateValue(theme, property, e.target.value));
    
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
