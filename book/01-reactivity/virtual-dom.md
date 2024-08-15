- React uses a concept called the "Virtual DOM" to optimize the way updates are made to the user interface, ensuring fast and efficient re-rendering.
- Components are structured in a three model known as a dom.
- Virtual dom is just a lightweight copy of the actual dom.

- The process on virtual dom is

1. First create a virtual dom with the changes.
2. This virtual dom is compared to the dom before changes
   to identify exactly what has to change and only what have actually to change
   nothing more, this process where react is comparing this two threes is called
   reconcilation.
3. After react identified what have to change, it update it (commiting)

## In mobile

In mobile are few steps more, serialization
is just react store the instruction that in reconcilation phrase,
and send it in a json format toa javascript bridge that work as
a translater between the native(android & ios) and React.

Reconcilation - > Serialization - > Javascript bridge - patching.
