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
                background-url="https://assets.newatlas.com/dims4/default/3368e6d/2147483647/strip/true/crop/925x617+0+232/resize/2400x1600!/format/webp/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fchandra-nasa-space-telescope-anniversary-4.jpg"
            />
		</>
	);
};

export default Save;
