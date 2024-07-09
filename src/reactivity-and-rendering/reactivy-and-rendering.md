#Reactivity

Reactivity refers to an application's ability to update and respond to data changes efficiently and automatically. In the context of a web application, this means that when data changes (e.g., through user input, a server update, or a change in application state), the user interface (UI) automatically updates to reflect those changes. Frameworks and libraries like React, Vue.js, and Svelte implement reactivity to facilitate the management of state changes and their impact on the UI.

#Rendering

Rendering, on the other hand, refers to the process of generating the UI based on the current state of the application. There are different types of rendering:

-Client-Side Rendering (CSR): The UI is generated in the user's browser using JavaScript. React, for example, performs client-side rendering by default.

-Server-Side Rendering (SSR): The UI is generated on the server and sent to the client as static HTML, which is then hydrated (made interactive) with JavaScript. Next.js is an example of a framework that facilitates SSR with React.

-Static Site Generation (SSG): Pages are generated at build time and served as static HTML files. This is useful for content that does not change frequently.

-Incremental Static Regeneration (ISR): Combines the best of SSR and SSG, allowing static pages to be regenerated incrementally and on-demand.

#Relationship Between Reactivity and Rendering

Reactivity encompasses broader aspects than rendering. While rendering is the act of generating and updating the UI, reactivity includes:

-Change Detection: Identifying when and what parts of the data have changed.
-Change Propagation: Determining how those changes should be reflected in the UI.
-UI Update: Re-rendering the parts of the UI that need to be updated to reflect the data changes.

In summary, reactivity includes rendering as one of its parts but also encompasses the logic and mechanisms to detect and handle data changes, ensuring that the UI stays synchronized with the application's state.

<!-- Thoungs -->

- React reactivity and rendering is based in something called Virtual DOM.
- Reactivity on react is handle mainly by using two hooks useState and useEffect,
  with useState we handle states as his name said and with useEffect we control the component rendering.
- When a component is rendered, the components under him in the arbol treee hierchy
- Renconcilation
- Diffting

<!-- Questions to be answer later -->

<!-- What is built-time vs request time? for later -->
