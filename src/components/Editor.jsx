import './Section.css';
import './Editor.css';
import { useSelector } from 'react-redux';
import { getWhiteLabelCssCustomPropertiesForEditor } from '../selectors';
import CssCustomProperty from './CssCustomProperty';

const Editor = props => {
    const cssCustomPropertiesForEditor = useSelector(getWhiteLabelCssCustomPropertiesForEditor);

    return (
        <div className="editor section">
            {cssCustomPropertiesForEditor.map(cssCustomProperty => (
                <CssCustomProperty 
                    key={cssCustomProperty.property} 
                    cssCustomProperty={cssCustomProperty} 
                />
            ))}
        </div>
    );
};

export default Editor;
