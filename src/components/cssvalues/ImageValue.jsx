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
        if (!file) {
            updateHandler({ target: { value: null }});
            return;
        }
        const url = await asyncLoadFile(file);
        updateHandler({ target: { value: `url(${url})` }});
    };

    const previewStyles = {
        backgroundImage: cssValue,
        backgroundColor: cssValue ? 'var(--page-header-colour)' : 'transparent',
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
            <span 
                className={`css-value-image-preview ${cssValue ? '' : 'blank'}`} 
                style={previewStyles}
                data-blank-message="Choose an image file"
            ></span>
        </div>
    );
};

export default ImageValue;
