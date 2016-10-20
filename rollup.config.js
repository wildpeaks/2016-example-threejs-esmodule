import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
	entry: './application.js',
	plugins: [
		babel({
			compact: true,
			presets: [
				['es2015', {modules: false}]
			]
		}),
		nodeResolve({
			jsnext: true,
			main: true
		})
	],
	targets: [

		// Web application (self-executing function)
		{
			format: 'iife',
			sourceMap: false,
			moduleName: 'application',
			dest: 'docs/bundle.iife.js'
		}

		// Library (Universal Module format)
		// {
		// 	format: 'umd',
		// 	sourceMap: false,
		// 	moduleName: 'application',
		// 	dest: 'docs/bundle.umd.js'
		// },

		// Library (ES Module format)
		// {
		// 	format: 'es',
		// 	sourceMap: false,
		// 	dest: 'docs/bundle.es6.js'
		// }
	]
};
