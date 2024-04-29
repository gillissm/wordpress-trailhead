( () => {
	'use strict';
	var e,
		t = {
			708: () => {
				const e = window.wp.blocks,
					t = window.React,
					r = ( window.wp.i18n, window.wp.blockEditor ),
					n = JSON.parse( '{"UU":"trailhead/mylist"}' );
				( 0, e.registerBlockType )( n.UU, {
					edit: function ( { attributes: e, setAttributes: n } ) {
						return ( 0, t.createElement )(
							t.Fragment,
							null,
							( 0, t.createElement )(
								'div',
								{ ...( 0, r.useBlockProps )() },
								( 0, t.createElement )(
									'h2',
									null,
									( 0, t.createElement )( r.PlainText, {
										value: e.title,
										onChange: ( e ) => n( { title: e } ),
									} )
								),
								( 0, t.createElement )(
									'div',
									null,
									( 0, t.createElement )( r.RichText, {
										value: e.copy,
										onChange: ( e ) => n( { copy: e } ),
									} )
								)
							)
						);
					},
				} );
			},
		},
		r = {};
	function n( e ) {
		var l = r[ e ];
		if ( void 0 !== l ) return l.exports;
		var a = ( r[ e ] = { exports: {} } );
		return t[ e ]( a, a.exports, n ), a.exports;
	}
	( n.m = t ),
		( e = [] ),
		( n.O = ( t, r, l, a ) => {
			if ( ! r ) {
				var i = 1 / 0;
				for ( u = 0; u < e.length; u++ ) {
					for (
						var [ r, l, a ] = e[ u ], o = ! 0, c = 0;
						c < r.length;
						c++
					)
						( ! 1 & a || i >= a ) &&
						Object.keys( n.O ).every( ( e ) => n.O[ e ]( r[ c ] ) )
							? r.splice( c--, 1 )
							: ( ( o = ! 1 ), a < i && ( i = a ) );
					if ( o ) {
						e.splice( u--, 1 );
						var s = l();
						void 0 !== s && ( t = s );
					}
				}
				return t;
			}
			a = a || 0;
			for ( var u = e.length; u > 0 && e[ u - 1 ][ 2 ] > a; u-- )
				e[ u ] = e[ u - 1 ];
			e[ u ] = [ r, l, a ];
		} ),
		( n.o = ( e, t ) => Object.prototype.hasOwnProperty.call( e, t ) ),
		( () => {
			var e = { 392: 0, 328: 0 };
			n.O.j = ( t ) => 0 === e[ t ];
			var t = ( t, r ) => {
					var l,
						a,
						[ i, o, c ] = r,
						s = 0;
					if ( i.some( ( t ) => 0 !== e[ t ] ) ) {
						for ( l in o ) n.o( o, l ) && ( n.m[ l ] = o[ l ] );
						if ( c ) var u = c( n );
					}
					for ( t && t( r ); s < i.length; s++ )
						( a = i[ s ] ),
							n.o( e, a ) && e[ a ] && e[ a ][ 0 ](),
							( e[ a ] = 0 );
					return n.O( u );
				},
				r = ( globalThis.webpackChunktrailhead =
					globalThis.webpackChunktrailhead || [] );
			r.forEach( t.bind( null, 0 ) ),
				( r.push = t.bind( null, r.push.bind( r ) ) );
		} )();
	var l = n.O( void 0, [ 328 ], () => n( 708 ) );
	l = n.O( l );
} )();
