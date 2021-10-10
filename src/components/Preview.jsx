import './Preview.css';
import { makeUpperCaseFirstLetter } from '../utils';

const Preview = props => {
    const { theme } = props;
    const displayThemeName = makeUpperCaseFirstLetter(theme);
    const doNothing = e => !!e.preventDefault();

    return (
        <div className={`preview ${theme}`}>
            <div className="preview-heading">{displayThemeName} theme</div>

            <div className="preview-subheading">Page header</div>
            <header className="page-heading">
                <div className="preview-header-logo" title="Logo preview" />
                <p>Header text with a <a href="#top" onClick={doNothing}>link</a>.</p>
            </header>
            
            <div className="preview-subheading">Typography</div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
            <h4>Heading 4</h4>
            <p>Body text with a <a href="#top" onClick={doNothing}>link</a>.</p>

            <div className="preview-subheading">Buttons</div>
            <p>
                <button className="button button-primary">Primary button</button>
            </p>
            <p>
                <button className="button button-secondary">Secondary button</button>
            </p>
            <p>
                <button className="button button-option active">Option (active)</button>
                <button className="button button-option">Option (inactive)</button>
                <button className="button button-option">Option (inactive)</button>
            </p>
        </div>
    );
};

export default Preview;
