// Variant of the babel es2015 preset for use with script code that is not an ES2015 module, but rather
// a standalone script.
module.exports = function() {
	return {
		presets: [
			[ 'es2015', { modules: false } ]
		]
	};
}
