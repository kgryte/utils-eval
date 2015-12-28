eval
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Alias for `eval` global.


## Installation

``` bash
$ npm install utils-eval
```


## Usage

``` javascript
var evil = require( 'utils-eval' );
```

#### evil( str )

Alias for `eval` global.

``` javascript
var val = evil( '5*4*3*2*1' );
// returns 120 
```


## Notes

*	A reference to `eval` __is__ treated differently by the compiler. For example, when evaluating code containing block-scoped declarations (e.g., `let`, `const`, `function`, `class`), the compiler may throw an `error` complaining that block-scoped declarations are __not__ yet supported outside of `strict mode`. One possible workaround is to include `"use strict";` in the evaluated code, as done in the example below.


## Examples

``` javascript
var evil = require( 'utils-eval' );

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
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## CLI

### Installation

To use the module as a general utility, install the module globally

``` bash
$ npm install -g utils-eval
```


### Usage

``` bash
Usage: jseval [options] <code>

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
```


### Examples

``` bash
$ jseval '5*4*3*2*1'
```


---
## Tests

### Unit

Unit tests use the [Mocha][mocha] test framework with [Chai][chai] assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/utils-eval.svg
[npm-url]: https://npmjs.org/package/utils-eval

[build-image]: http://img.shields.io/travis/kgryte/utils-eval/master.svg
[build-url]: https://travis-ci.org/kgryte/utils-eval

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/utils-eval/master.svg
[coverage-url]: https://codecov.io/github/kgryte/utils-eval?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/utils-eval.svg
[dependencies-url]: https://david-dm.org/kgryte/utils-eval

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/utils-eval.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/utils-eval

[github-issues-image]: http://img.shields.io/github/issues/kgryte/utils-eval.svg
[github-issues-url]: https://github.com/kgryte/utils-eval/issues

[mocha]: http://mochajs.org/
[chai]: http://chaijs.com
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com
