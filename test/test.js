/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' );
var evil = require( './../lib' );


// VARIABLES //

var expect = chai.expect;
var assert = chai.assert;


// TESTS //

describe( 'eval', function tests() {

	it( 'should export a function', function test() {
		expect( evil ).to.be.a( 'function' );
	});

	it( 'should be an alias for eval', function test() {
		assert.strictEqual( evil, eval );
	});

});
