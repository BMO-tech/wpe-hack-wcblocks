import { __ } from '@wordpress/i18n'

/**
 * The Edit function for the block.
 *
 * @param {Object} props The props of this component.
 * @return {Function} The Edit function for the block.
 */
const Edit = ( props ) => {
    const { attributes, setAttributes } = props;

    const {
        InspectorControls,
     } = wp.blockEditor;

     const {
        PanelBody,
        PanelRow,
        TextControl,
    } = wp.components;

	return (
		<>
            <InspectorControls>
                <PanelBody title={ __( 'Web Component Block Settings', 'wcblocks' ) } >
                <PanelRow>
                        <TextControl
                            label={ __( 'Heading Text' ) }
                            value={ attributes.headingText }
                            onChange={ ( newVal ) =>
                                setAttributes( { headingText: newVal } )
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label={ __( 'Middle Text' ) }
                            value={ attributes.middleText }
                            onChange={ ( newVal ) =>
                                setAttributes( { middleText: newVal } )
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label={ __( 'Secondary Text' ) }
                            value={ attributes.secondaryText }
                            onChange={ ( newVal ) =>
                                setAttributes( { secondaryText: newVal } )
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label={ __( 'Background URL 1' ) }
                            value={ attributes.backgroundUrl1 }
                            onChange={ ( newVal ) =>
                                setAttributes( { backgroundUrl1: newVal } )
                            }
                        />
                    </PanelRow>
                    <PanelRow>
                        <TextControl
                            label={ __( 'Background URL 2' ) }
                            value={ attributes.backgroundUrl2 }
                            onChange={ ( newVal ) =>
                                setAttributes( { backgroundUrl2: newVal } )
                            }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <wcb-hero
                heading={ attributes.headingText } 
                cta-text={ attributes.secondaryText }
                middle-text={ attributes.middleText }
                background-url-1={ attributes.backgroundUrl1 }
                background-url-2={ attributes.backgroundUrl2 }
            />
		</>
	);
};

export default Edit;
