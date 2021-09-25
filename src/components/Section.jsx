import './Section.css';
import CssCustomProperty from './CssCustomProperty';

const Section = props => {
    const { section } = props;
    return (
        <section className="section">
            <h2 className="section-heading">{section.sectionName}</h2>
            {section.cssCustomProperties.map(cssCustomProperty => (
                <CssCustomProperty 
                    key={cssCustomProperty.property} 
                    cssCustomProperty={cssCustomProperty} 
                />
            ))}
        </section>
    );
};

export default Section;
