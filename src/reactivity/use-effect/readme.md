# Introduction to useEffect

First to understand what is the use of useEffect we must be understand first,
what is a side effect , a side effect is, the most easy explaination is:

a side effect is any action or change that occurs as a consequence of executing a function or process affecting something outside the function itself (Watch side-effect-example.js).

After watch the example, maybe you will thinking about how is executed
useEffect, if is to handle side effect thats meants that useEffect is executed
outside the function scope?

Well thats not is exactly how work but thanks to the before explaination we can understand
what really is useEffect.

useEffect is nothing more that a function that help us to execute code (side effects),
after our component is mounted for first time.

# useEffect code execution behavior.

First as we know javascript is executed is cascade,
when a function is called (Component is nothing more that a function that return a object that indecate how gonna look) and exist a useEffect() inside the function, all the code inside
the useEffect will run after the component is mounted for first time.

Look the example inside use-effect-example-1.tsx

So if useEffect is really executed inside the function scope of the component why is considered
as a tool to handle side effects?

Because this tool born exactly to help us to manipulate.

# useEffect dependency array.

# Relation with reactivity - esencial tool to work.

- Dependency array behavior
- how use effect have a direct relation with reactivity.
