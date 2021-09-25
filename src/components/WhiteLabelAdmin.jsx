import './WhiteLabelAdmin.css';
import Section from './Section';

const WhiteLabelAdmin = props => {
    const { data } = props;
    return (
        <div className="whitelabel-admin">
            <h1 className="whitelabel-admin-heading">{data.name}</h1>
            {data.sections.map(section => <Section key={section.sectionId} section={section} />)}
        </div>
    );
};

export default WhiteLabelAdmin;
