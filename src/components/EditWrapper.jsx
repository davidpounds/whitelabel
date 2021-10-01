import './EditWrapper.css';

export const DISPLAY_MODE = Object.freeze({
    BLOCK: 'block',
    INLINE: 'inline',
});

const EditWrapper = props => {
    const { children, theme, properties = [], display = DISPLAY_MODE.BLOCK } = props;
    const clickHandler = e => {
        const { target } = e;
        e.preventDefault();
        e.stopPropagation();
        console.log({target, theme, properties});
    };

    return (
        <GenericWrapper
            className="edit-wrapper"
            display={display}
            onClick={clickHandler}
        >
            {children}
        </GenericWrapper>
    );
};

const GenericWrapper = props => {
    const { display, children, ...otherProps } = props;
    switch (display) {
        case DISPLAY_MODE.BLOCK:
            return <div {...otherProps}>{children}</div>;
        case DISPLAY_MODE.INLINE:
            return <span {...otherProps}>{children}</span>;
        default:
            return null;
    }
};

export default EditWrapper;
