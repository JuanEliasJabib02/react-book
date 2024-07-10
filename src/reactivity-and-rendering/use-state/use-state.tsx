import { useState } from 'react';
/* using react-aria components :) accesibility chapter */
import { Button } from 'react-aria-components';

export default function ExampleUseState() {
	/*
  https://react.dev/learn/state-a-components-memory
  https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e
  */
	const [counter, setCounter] = useState(0);
	console.log('re-render');
	/* 
  - Stares are variables that the component can remenber
  between renders.
  - normal variables let, const, var are not remenber between renders.
  - A component can remenber his prev states, are pull in like a "history stack", i decide
  to call it, under hook is something with arrays, in top  links you can see how it works more in deed
   */

	return (
		<div className='flex w-full flex-col gap-4 justify-center'>
			<h1 className='text-4xl font-bold gap-8'>useState example</h1>
			<div className='text-2xl'>{counter}</div>
			{/*  */}
			<Button
				className=' bg-blue-500 flex justify-center w-auto p-4 rounded-lg hover:bg-blue-700'
				onPress={() => setCounter(counter + 1)}
			>
				Increment count
			</Button>
		</div>
	);
}
