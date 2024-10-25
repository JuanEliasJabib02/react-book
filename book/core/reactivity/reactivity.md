# Basics

- The most easy way to explain what is reactivity is this simple thought.
ok ,so reactivity is the capacibility that have a application to respond and updated the ui based on data changes, in a shorter word,
the reactivity bring "live" to our ui...
- Reactivity has two principal actors, "states" and "side-affects" , being
  states the "memory" of our application and side effects like the nerveous
  system trigetting actions in response to changes in states.

## States

- States is like the memory of our application, are used to save.
- States are used to store data that gonna change overtime
- Statess are the "memory" of our application
- React handle states with a hook useState()
- useState when the data that is stored changes instead of mutate the current value, just create another one and return the new, states are inmutable,so
  inside our hook, is created something that i gonna name, "history stack states".
- When a state change it cause a re-render...
  how we talk in component-life-cycle.md
- actually the only thing that cause a re-render in react is only a state changes, not the props...
- A children is re-rendered if his father was re-render, is like a re-render in chain with the flow father > childrens.

If this behavior is unknown, can deriver into mistakes and performance issues,
as a good practice every state has to be the most isolted possible where is being used.

exist some performance tecniques to avoid this behavior, we gonna
talk more about it inside the performance sections
















