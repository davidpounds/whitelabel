import './TextValue.css';

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

export default TextValue;
