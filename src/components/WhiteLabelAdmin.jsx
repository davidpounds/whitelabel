import './WhiteLabelAdmin.css';
import { useSelector } from 'react-redux';
import { getWhiteLabelName, getWhiteLabelSections } from '../selectors';
import Preview from './Preview';
import Section from './Section';

const WhiteLabelAdmin = props => {
    const name = useSelector(getWhiteLabelName);
    const sections = useSelector(getWhiteLabelSections);

    return (
        <div className="whitelabel-admin">
            <h1 className="whitelabel-admin-heading">{name}</h1>
            <Preview theme="light" />
            <Preview theme="dark" />
            <div className="whitelabel-admin-values">
                {sections.map(section => <Section key={section.sectionId} section={section} />)}
            </div>
        </div>
    );
};

export default WhiteLabelAdmin;
