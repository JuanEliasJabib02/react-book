# Rendering strategies

In the reactivity chapter we cover a bit about rendering, the neccesary to understand the re-render

# Differents types of rendering in a app

There are different types of rendering:

- Client-Side Rendering (CSR): The UI is generated in the user's browser using JavaScript. React, for example, performs client-side rendering by default.

- Server-Side Rendering (SSR): The UI is generated on the server and sent to the client as static HTML, which is then hydrated (made interactive) with JavaScript. Next.js is an example of a framework that facilitates SSR with React.

- Static Site Generation (SSG): Pages are generated at build time and served as static HTML files. This is useful for content that does not change frequently.

- Incremental Static Regeneration (ISR): Combines the best of SSR and SSG, allowing static pages to be regenerated incrementally and on-demand.

- React Frameworks like nextjs have this behavior automatic optmize your app to be static
  when is possible https://nextjs.org/docs/pages/building-your-application/rendering/automatic-static-optimization

# Thougts

- Hydratation( just copy it about reactivity chapter)
- Why key is used in list.
- Server components
- Client componentes
- Pre-rendering(SSR & SSR) ,Client rendering, ISR rendering
