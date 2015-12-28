'use strict';

var evil = require( './../lib' );

function compile( ctor ) {
	var name;
	var str;

	name = ctor.match( /^(\w*)Array$/ )[ 1 ];
	name = name + 'DataArray';

	str = '';
	str += '(function create(){';
	str += '"use strict";';
	str += 'class '+name+' extends '+ctor+'{';
	str += 'constructor(x){';
	str += 'super(x);';
	str += '}';
	str += '}';
	str += 'return '+name+';';
	str += '})();';
	return str;
}

var ctors = [
	'Int8Array',
	'Uint8Array',
	'Uint8ClampedArray',
	'Int16Array',
	'Uint16Array',
	'Int32Array',
	'Uint32Array',
	'Float32Array',
	'Float64Array',
	'Array'
];

var fcn;
for ( var i = 0; i < ctors.length; i++ ) {
	fcn = evil( compile( ctors[i] ) );
	console.log( fcn.toString() );
}
