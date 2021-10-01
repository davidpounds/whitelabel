import './WhiteLabelAdmin.css';
import { useSelector } from 'react-redux';
import { getWhiteLabelName } from '../selectors';
import Editor from  './Editor';
import Preview from './Preview';

const WhiteLabelAdmin = props => {
    const name = useSelector(getWhiteLabelName);

    return (
        <div className="whitelabel-admin">
            <h1 className="whitelabel-admin-heading">{name}</h1>
            <Editor />
            <div className="preview-wrapper">
                <Preview theme="light" />
                <Preview theme="dark" />
            </div>
        </div>
    );
};

export default WhiteLabelAdmin;
