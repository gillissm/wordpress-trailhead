( () => {
	'use strict';
	var e,
		t = {
			388: () => {
				const e = window.wp.blocks,
					t = window.React,
					r = ( window.wp.i18n, window.wp.blockEditor ),
					i = JSON.parse( '{"UU":"trailhead/campsite"}' );
				( 0, e.registerBlockType )( i.UU, {
					edit: function () {
						return ( 0, t.createElement )(
							'div',
							{ ...( 0, r.useBlockProps )() },
							( 0, t.createElement )(
								'div',
								null,
								( 0, t.createElement )(
									'h2',
									null,
									( 0, t.createElement )( PlainText, {
										value: attributes.title,
										onChange: ( e ) =>
											setAttributes( { title: e } ),
									} ),
									'with note'
								),
								( 0, t.createElement )(
									'div',
									null,
									( 0, t.createElement )( RichText, {
										value: attributes.copy,
										onChange: ( e ) =>
											setAttributes( { copy: e } ),
									} )
								)
							)
						);
					},
				} );
			},
		},
		r = {};
	function i( e ) {
		var n = r[ e ];
		if ( void 0 !== n ) return n.exports;
		var a = ( r[ e ] = { exports: {} } );
		return t[ e ]( a, a.exports, i ), a.exports;
	}
	( i.m = t ),
		( e = [] ),
		( i.O = ( t, r, n, a ) => {
			if ( ! r ) {
				var l = 1 / 0;
				for ( u = 0; u < e.length; u++ ) {
					for (
						var [ r, n, a ] = e[ u ], o = ! 0, s = 0;
						s < r.length;
						s++
					)
						( ! 1 & a || l >= a ) &&
						Object.keys( i.O ).every( ( e ) => i.O[ e ]( r[ s ] ) )
							? r.splice( s--, 1 )
							: ( ( o = ! 1 ), a < l && ( l = a ) );
					if ( o ) {
						e.splice( u--, 1 );
						var c = n();
						void 0 !== c && ( t = c );
					}
				}
				return t;
			}
			a = a || 0;
			for ( var u = e.length; u > 0 && e[ u - 1 ][ 2 ] > a; u-- )
				e[ u ] = e[ u - 1 ];
			e[ u ] = [ r, n, a ];
		} ),
		( i.o = ( e, t ) => Object.prototype.hasOwnProperty.call( e, t ) ),
		( () => {
			var e = { 180: 0, 564: 0 };
			i.O.j = ( t ) => 0 === e[ t ];
			var t = ( t, r ) => {
					var n,
						a,
						[ l, o, s ] = r,
						c = 0;
					if ( l.some( ( t ) => 0 !== e[ t ] ) ) {
						for ( n in o ) i.o( o, n ) && ( i.m[ n ] = o[ n ] );
						if ( s ) var u = s( i );
					}
					for ( t && t( r ); c < l.length; c++ )
						( a = l[ c ] ),
							i.o( e, a ) && e[ a ] && e[ a ][ 0 ](),
							( e[ a ] = 0 );
					return i.O( u );
				},
				r = ( globalThis.webpackChunktrailhead =
					globalThis.webpackChunktrailhead || [] );
			r.forEach( t.bind( null, 0 ) ),
				( r.push = t.bind( null, r.push.bind( r ) ) );
		} )();
	var n = i.O( void 0, [ 564 ], () => i( 388 ) );
	n = i.O( n );
} )();
