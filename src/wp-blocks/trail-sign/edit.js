/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, PlainText, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import NumberControl from '@wordpress/components/build-types/number-control';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
			<div { ...useBlockProps() }>
				{ /* <InspectorControls>
					<Edit>
						<NumberControl
							value={ attributes.miles }
							onChange={ ( val ) =>
								setAttributes( { miles: val } )
							}
							min={ 1 }
							max={ 15 }
							label="Miles for Trail"
						></NumberControl>
					</Edit>
				</InspectorControls> */ }
				<div>
					<RichText
						label="Describe the trail"
						value={ attributes.copy }
						onChange={ ( val ) => setAttributes( { copy: val } ) }
						tagName="p"
					></RichText>

					<br />
					<PlainText
						label="Enter the miles"
						value={ attributes.miles }
						onChange={ ( val ) => setAttributes( { miles: val } ) }
					></PlainText>
					<br />
					{ /* <NumberControl
						value={ attributes.distance }
						onChange={ ( val ) =>
							setAttributes( { distance: val } )
						}
						shiftStep={ 1 }
						isShiftStepEnabled={ true }
						min={ 1 }
						max={ 30 }
					></NumberControl> */ }
					{ /* <PlainText
						label="Enter Distance"
						value={ attributes.distance }
						onChange={ ( val ) =>
							setAttributes( { distance: val } )
						}
					></PlainText> */ }
					{ /* <br/>
					<PlainText value={attributes.copy}
						onChange={(val) => setAttributes({ copy: val })}> </PlainText>
					<br />
					<NumberControl isShiftStepEnabled={true}
						onChange={(val) => setAttributes({ distance: val })}
						shiftStep={1}
						min={1}
						max={30}
						value= {attributes.distance}></NumberControl>
					<br /> */ }
					{ /* <SelectControl
					label="Trail Difficulty"
					value={attributes.difficulty}
					options={[
						{ label: Object.keys(TrailDifficultyEnum.easy)[0], value: TrailDifficultyEnum.easy.toString()},
						{ label: Object.keys(TrailDifficultyEnum.moderate)[0], value: TrailDifficultyEnum.moderate.toString() },
						{ label: Object.keys(TrailDifficultyEnum.difficult)[0], value: TrailDifficultyEnum.difficult.toString() },
						{ label: Object.keys(TrailDifficultyEnum.extreme)[0], value: TrailDifficultyEnum.extreme.toString() },
					]}
						onChange={(val) => setAttributes({ distance: val })}></SelectControl> */ }
				</div>
			</div>
		</>
	);
}
