# What is the useRef and his function wich was created.

To understand what is the useRef first we must understand what is a ref.

the most easy definition is: a ref is a mutable object that react preserve between
re-renders, is just this.

How we know components are just functions, so everything inside is basically a local variable
to that function.

When React re-render a component, the function that define the component is called again
This means that all the code linside the component actually is excecuted again.

How ever react has a mechanism for optimization stuff (reconcilation, virtual dom ect ect...)

## Differences between a ref and a state

- One of the biggest and most visible differences between Refs and state is
  that Refs update don't cause re-renders.

## Whats means mutable vs inmutable in React

## Principal use cases for useRef

## Examples
