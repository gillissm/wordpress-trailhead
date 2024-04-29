( () => {
	'use strict';
	const e = window.wp.blocks,
		t = window.React,
		l = ( window.wp.i18n, window.wp.blockEditor );
	window.wp[ 'components/buildTypes/numberControl' ];
	const n = JSON.parse( '{"UU":"trailhead/trail-sign"}' );
	( 0, e.registerBlockType )( n.UU, {
		edit: function ( { attributes: e, setAttributes: n } ) {
			return ( 0, t.createElement )(
				t.Fragment,
				null,
				( 0, t.createElement )(
					'div',
					{ ...( 0, l.useBlockProps )() },
					( 0, t.createElement )(
						'div',
						null,
						( 0, t.createElement )( l.RichText, {
							label: 'Describe the trail',
							value: e.copy,
							onChange: ( e ) => n( { copy: e } ),
							tagName: 'p',
						} ),
						( 0, t.createElement )( 'br', null ),
						( 0, t.createElement )( l.PlainText, {
							label: 'Enter the miles',
							value: e.miles,
							onChange: ( e ) => n( { miles: e } ),
						} ),
						( 0, t.createElement )( 'br', null )
					)
				)
			);
		},
	} );
} )();
