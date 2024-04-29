( () => {
	'use strict';
	var e,
		r = {
			665: () => {
				const e = window.wp.blocks,
					r = window.React,
					t = ( window.wp.i18n, window.wp.blockEditor ),
					o = window.wp[ 'blockEditor/build/components' ],
					i = JSON.parse( '{"UU":"trailhead/cta"}' );
				( 0, e.registerBlockType )( i.UU, {
					edit: function ( { attributes: e, setAttributes: i } ) {
						return ( 0, r.createElement )(
							'div',
							{ ...( 0, t.useBlockProps )() },
							( 0, r.createElement )( o.RichText, {
								value: e.headline,
								onChange: ( e ) => i( { headline: e } ),
							} )
						);
					},
				} );
			},
		},
		t = {};
	function o( e ) {
		var i = t[ e ];
		if ( void 0 !== i ) return i.exports;
		var n = ( t[ e ] = { exports: {} } );
		return r[ e ]( n, n.exports, o ), n.exports;
	}
	( o.m = r ),
		( e = [] ),
		( o.O = ( r, t, i, n ) => {
			if ( ! t ) {
				var a = 1 / 0;
				for ( d = 0; d < e.length; d++ ) {
					for (
						var [ t, i, n ] = e[ d ], l = ! 0, s = 0;
						s < t.length;
						s++
					)
						( ! 1 & n || a >= n ) &&
						Object.keys( o.O ).every( ( e ) => o.O[ e ]( t[ s ] ) )
							? t.splice( s--, 1 )
							: ( ( l = ! 1 ), n < a && ( a = n ) );
					if ( l ) {
						e.splice( d--, 1 );
						var c = i();
						void 0 !== c && ( r = c );
					}
				}
				return r;
			}
			n = n || 0;
			for ( var d = e.length; d > 0 && e[ d - 1 ][ 2 ] > n; d-- )
				e[ d ] = e[ d - 1 ];
			e[ d ] = [ t, i, n ];
		} ),
		( o.o = ( e, r ) => Object.prototype.hasOwnProperty.call( e, r ) ),
		( () => {
			var e = { 10: 0, 350: 0 };
			o.O.j = ( r ) => 0 === e[ r ];
			var r = ( r, t ) => {
					var i,
						n,
						[ a, l, s ] = t,
						c = 0;
					if ( a.some( ( r ) => 0 !== e[ r ] ) ) {
						for ( i in l ) o.o( l, i ) && ( o.m[ i ] = l[ i ] );
						if ( s ) var d = s( o );
					}
					for ( r && r( t ); c < a.length; c++ )
						( n = a[ c ] ),
							o.o( e, n ) && e[ n ] && e[ n ][ 0 ](),
							( e[ n ] = 0 );
					return o.O( d );
				},
				t = ( globalThis.webpackChunktrailhead =
					globalThis.webpackChunktrailhead || [] );
			t.forEach( r.bind( null, 0 ) ),
				( t.push = r.bind( null, t.push.bind( t ) ) );
		} )();
	var i = o.O( void 0, [ 350 ], () => o( 665 ) );
	i = o.O( i );
} )();
