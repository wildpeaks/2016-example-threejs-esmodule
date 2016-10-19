# example-threejs-esmodule

Example application that uses Rollup and the ES Module bundle of [three.js]().

Until the [official three module](https://www.npmjs.com/package/three) has a `jsnext:main` (or `module`) entry,
this example uses the forked [wildpeaks/three.js](https://github.com/wildpeaks/three.js) repository to find the ES bundle.

The application references the bundle using the `import` keyword:

	import {Vector3} from 'three';

