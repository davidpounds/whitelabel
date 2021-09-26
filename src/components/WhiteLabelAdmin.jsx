import './WhiteLabelAdmin.css';
import { useSelector } from 'react-redux';
import { getWhiteLabelName, getWhiteLabelSections } from '../selectors';
import Section from './Section';

const WhiteLabelAdmin = props => {
    const name = useSelector(getWhiteLabelName);
    const sections = useSelector(getWhiteLabelSections);

    return (
        <div className="whitelabel-admin">
            <h1 className="whitelabel-admin-heading">{name}</h1>
            {sections.map(section => <Section key={section.sectionId} section={section} />)}
        </div>
    );
};

export default WhiteLabelAdmin;
