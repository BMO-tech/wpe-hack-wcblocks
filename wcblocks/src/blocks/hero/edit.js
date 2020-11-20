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
                </PanelBody>
            </InspectorControls>
            <wcb-hero
                heading={ attributes.headingText } 
                cta-text="look at me"
                background-url="https://assets.newatlas.com/dims4/default/3368e6d/2147483647/strip/true/crop/925x617+0+232/resize/2400x1600!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fchandra-nasa-space-telescope-anniversary-4.jpg"
            />
		</>
	);
};

export default Edit;
