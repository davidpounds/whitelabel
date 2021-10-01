import './EditWrapper.css';
import { useDispatch } from 'react-redux';
import { showEditor } from '../actions';

export const DISPLAY_MODE = Object.freeze({
    BLOCK: 'block',
    INLINE: 'inline',
});

const EditWrapper = props => {
    const { 
        children, 
        properties = [], 
        display = DISPLAY_MODE.BLOCK 
    } = props;

    const dispatch = useDispatch();

    const clickHandler = e => {
        e.preventDefault();
        e.stopPropagation();
        dispatch(showEditor(properties));
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
