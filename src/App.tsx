import './App.css';
import UseEffectExample from './reactivity/use-effect/use-effect-example-1';
import UseEffectExample2 from './reactivity/use-effect/use-effect-example-2';
import UseEffectExample3 from './reactivity/use-effect/use-effect-example-3';
/* import ExampleUseState from './reactivity/use-state/use-state';
 */ function App() {
	return (
		<main className=''>
			{/* Invoke the component exmaple that you wanna see  */}
			{/* 			<ExampleUseState />
			 */}{' '}
			{/* 			<UseEffectExample />
			 */}{' '}
			{/* <UseEffectExample2 /> */}
			<UseEffectExample3 />
		</main>
	);
}

export default App;
