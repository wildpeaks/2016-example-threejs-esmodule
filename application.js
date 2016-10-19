import {Vector3} from 'three';

export default function(){
	const vec1 = new Vector3(1, 0, 0);
	const vec2 = new Vector3(0, 1, 0);
	const vec3 = new Vector3();
	vec3.crossVectors(vec1, vec2);
	console.log('Result is', vec3);
}
