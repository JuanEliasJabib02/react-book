import { useEffect, useState } from 'react';

function Parent() {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button onClick={() => setCounter(counter + 1)}>Parent click</button>
			<Children counter={counter} />
		</div>
	);
}

function Children({ counter }: { counter: number }) {
	useEffect(() => {
		alert(
			"from children useEffectg , changing becuase props changes and i'm inside a useEffect"
		);
	}, [counter]);
	return <div>Children Component</div>;
}

export default function UseEffectExample3() {
	return (
		<div>
			<Parent />
		</div>
	);
}
