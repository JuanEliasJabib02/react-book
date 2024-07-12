import { useEffect } from 'react';

export default function UseEffectExample() {
	useEffect(() => {
		/* This is inside a sideeffect is executed after
		the first render */
		console.log('1');
	}, []) /* Is empty the dependency array so its only executed in the first rendered */;

	/*This gonna be executed first */
	console.log('2');
	return <div>IM A USE EFFECT</div>;
}
