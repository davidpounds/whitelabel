import './Preview.css';
import EditWrapper, { DISPLAY_MODE } from './EditWrapper';

const Preview = props => {
    const { theme } = props;
    const doNothing = e => !!e.preventDefault();

    return (
        <div className={`preview ${theme}`}>
            <div className="preview-heading">Preview - {theme} theme</div>
            <EditWrapper 
                properties={[
                    "--site-background-colour", 
                    "--primary-brand-colour", 
                    "--secondary-brand-colour"
                ]}
            >
                <EditWrapper 
                    properties={[
                        "--page-header-colour"
                    ]}
                >
                    <header>
                        <EditWrapper 
                            theme={theme} 
                            properties={[
                                "--page-header-logo", 
                                "--page-header-logo-width", 
                                "--page-header-logo-height"
                            ]
                        }>
                            <div className="preview-header-logo" title="Logo preview" />
                        </EditWrapper>
                        <EditWrapper 
                            properties={["--page-header-text-colour"]}
                        >
                            <p>
                                Header text with a<> </> 
                                <EditWrapper
                                    display={DISPLAY_MODE.INLINE} 
                                    properties={["--page-header-link-colour"]}
                                >
                                    <a href="#top" onClick={doNothing}>link</a>
                                </EditWrapper>
                                .
                            </p>
                        </EditWrapper>
                    </header>
                </EditWrapper>
                <EditWrapper
                    properties={[
                        "--heading1-size",
                        "--heading1-colour"
                    ]}
                >
                    <h1>Heading 1</h1>
                </EditWrapper>
                <EditWrapper
                    properties={[
                        "--heading2-size",
                        "--heading2-colour"
                    ]}
                >
                    <h2>Heading 2</h2>
                </EditWrapper>
                <EditWrapper
                    properties={[
                        "--heading3-size",
                        "--heading3-colour"
                    ]}
                >
                    <h3>Heading 3</h3>
                </EditWrapper>
                <EditWrapper
                    properties={[
                        "--heading4-size",
                        "--heading4-colour"
                    ]}
                >
                    <h4>Heading 4</h4>
                </EditWrapper>
                <EditWrapper
                    properties={[
                        "--body-text-size",
                        "--body-text-colour"                    
                    ]}
                >
                    <p>
                        Body text with a<> </>
                        <EditWrapper
                            display={DISPLAY_MODE.INLINE} 
                            properties={["--body-link-colour"]}
                        >
                            <a href="#top" onClick={doNothing}>link</a>
                        </EditWrapper>
                        .
                    </p>
                </EditWrapper>
                <p>
                    <EditWrapper 
                        display={DISPLAY_MODE.INLINE}
                        properties={[
                            "--btn-primary-background-colour",
                            "--btn-primary-text-colour"
                        ]}
                    >
                        <button className="button button-primary">Primary button</button>
                    </EditWrapper>
                </p>
                <p>
                    <EditWrapper 
                        display={DISPLAY_MODE.INLINE}
                        properties={[
                            "--btn-secondary-background-colour",
                            "--btn-secondary-text-colour"
                        ]}
                    >
                        <button className="button button-secondary">Secondary button</button>
                    </EditWrapper>
                </p>
                <p>
                    <EditWrapper 
                        display={DISPLAY_MODE.INLINE}
                        properties={[
                            "--btn-option-active-background-colour",
                            "--btn-option-active-text-colour"
                        ]}
                    >
                        <button className="button button-option active">Option (active)</button>
                    </EditWrapper>
                    <EditWrapper 
                        display={DISPLAY_MODE.INLINE}
                        properties={[
                            "--btn-option-inactive-background-colour",
                            "--btn-option-inactive-text-colour"                            
                        ]}
                    >
                        <button className="button button-option">Option (inactive)</button>
                    </EditWrapper>
                    <EditWrapper 
                        display={DISPLAY_MODE.INLINE}
                        properties={[
                            "--btn-option-inactive-background-colour",
                            "--btn-option-inactive-text-colour"                            
                        ]}
                    >
                        <button className="button button-option">Option (inactive)</button>
                    </EditWrapper>
                </p>
            </EditWrapper>
        </div>
    );
};

export default Preview;
