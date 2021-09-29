import './ImageValue.css';

const ImageValue = props => {
    const { id, theme, cssValue, updateHandler } = props;

    const asyncLoadFile = file => new Promise((resolve, reject) => {
        if (!file) reject('File not provided');
        const reader = new FileReader();
        reader.addEventListener('load', e => resolve(e?.target?.result ?? null), false);
        reader.addEventListener('error', reject, false);
        reader.readAsDataURL(file);
    });
    
    const imageChangeHandler = async e => {
        const file = e?.target?.files?.[0] ?? null;
        if (!file) return;
        const url = await asyncLoadFile(file);
        updateHandler({ target: { value: url }});
    };

    const previewStyles = {
        backgroundImage: `url("${cssValue}")`,
        backgroundColor: cssValue ? 'var(--page-background-colour)' : 'transparent',
    };
    
    return (
        <div className="css-value-image">
            <label htmlFor={id} className="css-value-image-label">Browse</label>
            <input 
                id={id}
                className="css-value-input css-value-image-input"
                type="file" 
                data-theme={theme}
                onChange={imageChangeHandler}
            />
            <span className="css-value-image-preview" style={previewStyles}></span>
        </div>
    );
};

export default ImageValue;
