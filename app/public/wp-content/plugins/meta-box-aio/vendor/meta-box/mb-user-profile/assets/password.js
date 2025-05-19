( function ( $ ) {
	'use strict';

	function toggle() {
		const $this = $( this ),
			$input = $( this ).siblings( 'input' );
		$input.attr( 'type', $input.attr( 'type' ) === 'password' ? 'text' : 'password' );
		$input.attr( 'type' ) === 'password' ?
            $this.find( '.password-icon' ).removeClass( 'hide-icon' ).addClass( 'show-icon' ) :
            $this.find( '.password-icon' ).removeClass( 'show-icon' ).addClass( 'hide-icon' );
	}

    function init() {
        $( '.password-icon' ).parent().each( function () {
            $( this ).on( 'click', toggle );
        } );
    }

    $( document ).ready( init );
} )( jQuery );