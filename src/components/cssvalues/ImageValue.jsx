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

export default ImageValue;
