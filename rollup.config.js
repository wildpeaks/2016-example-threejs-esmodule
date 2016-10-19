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
		{
			format: 'iife',
			sourceMap: false,
			moduleName: 'application',
			dest: 'dist/bundle.iife.js'
		},
		{
			format: 'umd',
			sourceMap: false,
			moduleName: 'application',
			dest: 'dist/bundle.umd.js'
		},
		{
			format: 'es',
			sourceMap: false,
			dest: 'dist/bundle.es6.js'
		}
	]
};
