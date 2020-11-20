import { __ } from '@wordpress/i18n'

/**
 * The Save function for the block.
 *
 * @param {Object} props The props of this component.
 * @return {Function} The Save function for the block.
 */
const Save = ( props ) => {
    const { attributes } = props;

	return (
		<>
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

export default Save;
