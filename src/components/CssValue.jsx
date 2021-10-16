import './CssValue.css';
import { useDispatch } from 'react-redux';
import { updateValue } from '../actions';
import { CSS_VALUE_TYPE, THEME, makeUpperCaseFirstLetter } from '../utils';
import ColourValue from './cssvalues/ColourValue';
import ImageValue from './cssvalues/ImageValue';
import TextValue from './cssvalues/TextValue';
import { ReactComponent as LightThemeIcon } from '../icons/light.svg';
import { ReactComponent as DarkThemeIcon } from '../icons/dark.svg';
import { ReactComponent as BothThemeIcon } from '../icons/both.svg';

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
    const labelText = makeUpperCaseFirstLetter(
        themed ? 
            `${theme} theme` : 
            `${THEME.LIGHT} and ${THEME.DARK} themes`
    );
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
            <label htmlFor={id} className="css-value-label">
                <span className="text">{labelText}</span>
                {themed && theme === THEME.LIGHT && <LightThemeIcon className="icon" title={labelText} />} 
                {themed && theme === THEME.DARK && <DarkThemeIcon className="icon" title={labelText} />} 
                {!themed && <BothThemeIcon className="icon" title={labelText} />} 
            </label>
            {control}
        </div>
    );
};

export default CssValue;
