# Reactivity

Reactivity refers to an application's ability to update and respond to data changes efficiently and automatically. In the context of a web application, this means that when data changes (e.g., through user input, a server update, or a change in application state), the user interface (UI) automatically updates to reflect those changes. Frameworks and libraries like React, Vue.js, and Svelte implement reactivity to facilitate the management of state changes and their impact on the UI.

# Rendering

Rendering,on the other hand, refers to the process of generating the UI based on the current state of the application. There are different types of rendering:

- Client-Side Rendering (CSR): The UI is generated in the user's browser using JavaScript. React, for example, performs client-side rendering by default.

- Server-Side Rendering (SSR): The UI is generated on the server and sent to the client as static HTML, which is then hydrated (made interactive) with JavaScript. Next.js is an example of a framework that facilitates SSR with React.

- Static Site Generation (SSG): Pages are generated at build time and served as static HTML files. This is useful for content that does not change frequently.

- Incremental Static Regeneration (ISR): Combines the best of SSR and SSG, allowing static pages to be regenerated incrementally and on-demand.

- React Frameworks like nextjs have this behavior automatic optmize your app to be static
  when is possible https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization

- We cover most of this in the rendering chapter.

# Relationship Between Reactivity and Rendering

Reactivity encompasses broader aspects than rendering. While rendering is the act of generating and updating the UI, reactivity includes:

- Change Detection: Identifying when and what parts of the data have changed.
- Change Propagation: Determining how those changes should be reflected in the UI.
- UI Update: Re-rendering the parts of the UI that need to be updated to reflect the data changes.

In summary, reactivity includes rendering as one of its parts but also encompasses the logic and mechanisms to detect and handle data changes, ensuring that the UI stays synchronized with the application's state.

# How work the reactivity and rendering in react?

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

# React Hydratation.

- To understand the react hydratation we have to know, what is the difference
  between server side rendering and client side rendering.
- Hydratation is just the process by which React make interactive the html that come
  from the server.
- In client-side rendering, the browser builds the page and adds interactivity directly with JavaScript, so hydration is not needed.

# Thoughts to keep studyng later.

- use memo
- use callback
- useref
- why use callback and use memo is the same.
- the only way to stop a re-render of a component that is not needed to re-render in a tree
  is usememo and use callback, explain why is almost the same.

# questions to be answer

- What is the differences built-time vs request time in the rendering process.?
- What is the cycle of life of a React component?
  R/:Mounting, re-render, unmount.
- Explain the reconcilation process?
- What is the diffting and patching on React?