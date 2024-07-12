import { useEffect, useState } from 'react';

export default function UseEffectExample2() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		alert('Executed from useEffect beucase the counter change');

		/* This is being executed every time the counter change, if this was a prop
    and the prop change, the effect will cause a re-render too. */
	}, [counter]);

	return (
		<button onClick={() => setCounter(counter + 1)}>
			Counter is 0, click to +
		</button>
	);
}
