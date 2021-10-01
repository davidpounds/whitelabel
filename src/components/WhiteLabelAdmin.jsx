import './WhiteLabelAdmin.css';
import { useSelector, useDispatch } from 'react-redux';
import { showPreview as showPreviewAction } from '../actions';
import { getWhiteLabelName, getWhiteLabelSections, getShowPreview } from '../selectors';
import Preview from './Preview';
import Section from './Section';

const WhiteLabelAdmin = props => {
    const name = useSelector(getWhiteLabelName);
    const sections = useSelector(getWhiteLabelSections);
    const showPreview = useSelector(getShowPreview);
    const dispatch = useDispatch();
    const toggleShowPreview = () => {
        dispatch(showPreviewAction(!showPreview));
    };

    return (
        <div className="whitelabel-admin">
            <h1 className="whitelabel-admin-heading">{name}</h1>
            <div className="preview-wrapper">
                <div className="preview-heading">
                    Preview
                    <button className={`btn-toggle ${showPreview ? 'show' : 'hide'}`} onClick={toggleShowPreview} />
                </div>
                {showPreview && (
                    <>
                        <Preview theme="light" />
                        <Preview theme="dark" />
                    </>
                )}
            </div>
            {sections.map(section => <Section key={section.sectionId} section={section} />)}
        </div>
    );
};

export default WhiteLabelAdmin;
