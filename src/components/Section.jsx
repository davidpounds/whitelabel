import './Section.css';
import { useSelector } from 'react-redux';
import { getWhiteLabelCssCustomPropertiesForSection } from '../selectors';
import CssCustomProperty from './CssCustomProperty';

const Section = props => {
    const { section } = props;
    const cssCustomProperties = useSelector(getWhiteLabelCssCustomPropertiesForSection(section.sectionId));

    return (
        <section className="section">
            <h2 className="section-heading">{section.sectionName}</h2>
            {cssCustomProperties.map(cssCustomProperty => (
                <CssCustomProperty 
                    key={cssCustomProperty.property} 
                    cssCustomProperty={cssCustomProperty} 
                />
            ))}
        </section>
    );
};

export default Section;
