# Introduction to useEffect

To understand the purpose of useEffect, we first need to grasp the concept of a side effect.

## What is a Side Effect?

A side effect is any action or change that occurs as a consequence of executing a function or process, affecting something outside the function itself. This includes tasks like updating the DOM, making API calls, or setting up subscriptions.(Watch side-effect-example.js)

After watch the example, maybe you will thinking about how is executed
useEffect, if is to handle side effect thats meants that useEffect is executed
outside the function scope?

Well thats not is exactly how work but thanks to the before explaination we can understand
what really is useEffect.

useEffect is nothing more that a function that help us to execute code (side effects),
after our component is mounted for first time.

## useEffect code execution behavior.

First as we know javascript is executed is cascade,
when a function is called (Component is nothing more that a function that return a object that indecate how gonna look) and exist a useEffect() inside the function, all the code inside
the useEffect will run after the component is mounted for first time.

Look the example inside use-effect-example-1.tsx

## So if useEffect is really executed inside the function scope of the component why is considered as a tool to handle side effects?

Because the main purpuse behind this hook, is provide a way to ecapsulate and manage
the side effects in a clean and controlled manner. By placing side effect code inside useEffect, React ensures that:

- The effect runs after the component has been rendered.
- The effect can be cleaned up when the component unmounts or dependencies change

## Why is not executed before the render?

because we want to avoid interruptions, performacing side effects directly within the render phase
(outside useEffect) could lead to issues such as:

- Blocking UI Updates: If you were to make an API call or update the DOM directly in the render phase, it could block or delay the rendering of the component.
- Infinite Loops: If side effects were allowed in render, it could lead to infinite loops or excessive re-renders.

## Relation with reactivity

useEffect has a direct relationship with reactivity because it allows you to respond to changes in the component's state and props, enabling you to perform side effects in a controlled manner.

## The Dependency Array

The dependency array in useEffect allows you to specify the variables (state or props) that the effect depends on. When any of the dependencies change, React re-runs the effect, ensuring that your side effects are synchronized with the latest state or prop values.

### Dependency Array Behavior:

- No Dependency Array: useEffect runs after every render.
- Empty Dependency Array: useEffect runs only once after the initial render.
- Specified Dependencies: useEffect runs when any of the specified dependencies change.

# Narute of side effects in React

- Operations Outside the Component - Side effects are operations that affect or interact with the outside world or environment beyond the immediate scope of the component.

This includes tasks like:

- Updating the DOM: Changing the document title or modifying elements that are not managed by React.
- Making API Calls: Fetching data from a server and then updating the component state.
  Setting Up Subscriptions: Listening to events or external data sources.
