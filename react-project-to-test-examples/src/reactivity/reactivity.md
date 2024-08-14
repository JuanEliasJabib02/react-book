# Reactivity

Reactivity refers to an application's ability to update and respond to data changes efficiently and automatically. In the context of a web application, this means that when data changes (e.g., through user input, a server update, or a change in application state), the user interface (UI) automatically updates to reflect those changes. Frameworks and libraries like React, Vue.js, and Svelte implement reactivity to facilitate the management of state changes and their impact on the UI.

# Relationship Between Reactivity and Rendering

,
Rendering refers to the process to create UI based in the current state of a app,
but mainly when we talk about rendering as a part of reactivity, we talk
about the ability to update the ui based in the changes of states
in a app, this is what we call a re-render

Knowing this the most easy definition to it is,

reactivity is the mechanism by which the app is able
to detect and handle data changes, ensuring that the ui
stay syncronized with the application's state.

Reactivity encompasses broader aspects than rendering. While rendering is the act of generating and updating the UI, reactivity includes:

- Change Detection: Identifying when and what parts of the data have changed.
- Change Propagation: Determining how those changes should be reflected in the UI.
- UI Update: Re-rendering the parts of the UI that need to be updated to reflect the data changes.

# How work the reactivity in react?

In react we have two main tools to handle the reactivity of a web app, useState and useEffect,
combining this two hooks we can have a complete control about it.

The rendering of a application is react work under something called "virtual dom",
is designed to optimize the process of updating the user interface by minimizing direct manipulation of the actual DOM, which can be slow.
The virtual dom is nothing more that a representation in-memory of the dom

- in a simply way to understand virtual dom work
  comparing the previous dom with the virtual dom and check if something change
  and change in the real dom only the neccesary (this process is called reconcilation).

- Another things to have in mind working with React is how affect the re-render of a component
  in the three, when a component is re-render, his children are re-rendered too, more info go to
  this youtube video.

  https://www.youtube.com/watch?v=qTDnwmMF5q8&list=PL6dw1BPCcLC4n-4o-t1kQZH0NJeZtpmGp&ab_channel=DeveloperWay

- A re-render is ONLY caused when a state change, not when a prop change.

# Thoughts to keep studyng later.

- useref
- Clean effects
- Separating event for effects(this is in beta)

# FAQS

- What is the diffting and patching on React?
  Diffting is the process by which react compare the virtual old dom vs the virtual dom
  and see what have to chaneg, and patching is the process by which react update
  the dom.

  in react native the flow is diffting - serializacion(is like the parching but for native, just send a json info with the instructions) - javascript bridge(translate the info to native) - native.

- What is the cycle of life of a React component?
  The cycle of life in a component is mounted - re-render(updating) - unmounted

  being mounted phase the heaviest of all.
