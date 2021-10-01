import './Preview.css';

const Preview = props => {
    const { theme } = props;
    const doNothing = e => !!e.preventDefault();

    return (
        <div className={`preview ${theme}`}>
            <div className="preview-heading">Preview - {theme} theme</div>
            <header className="page-heading" data-section="Page header">
                <div className="preview-header-logo" title="Logo preview" data-section="Logo" />
                <p>Header text with a <a href="#top" onClick={doNothing}>link</a>.</p>
            </header>
            <div className="typography">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <p>Body text with a <a href="#top" onClick={doNothing}>link</a>.</p>
            </div>
            <p>
                <button className="button button-primary">Primary button</button>
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
