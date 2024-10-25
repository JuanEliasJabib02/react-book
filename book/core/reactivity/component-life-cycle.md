# Components have 3 states

- Mounted - Most heavyweight phase, this occurs the first time that the component is rendered.
- Re-render -> Most lightweight and a re-render is just react "re-painting"
  whats the user is seing"
- Unmounted -> When a component is destroyed and dont exist more in the dom three for example when we change the logic to change the component that is currently showing the ui based on a conditional rendered, when the component change for the anotherone the component react destroy the component and mount
  the new one.

## Important things.

- When we talk about re-render, the most easy way that i can think
  to describe a re-render is when a component is painting again to show
  always the most update version of that component to the client
- a good developer has to be able to control completly over every re-render in the application, must occurs because the developer haved a intention
  or a reason to make it happen(like update the UI :)
- As a good practices a component never must be re-rendered 2 times in a row
  that is a error, why a component gonna re-render twice if the first time that a re-render occurs is already update? the second one or the third one ect,dont make any sense that occurs, so a re-render must be only 1 time.
  is important to know this rule to mantain a top performance, is like avoid
  the dirty dust in your pc, a little bit dont make big things, but when is a lot just slow the pc.
- Another thing to have in mind, so much people on internet is saying that a re-render occurs when happen two things the first is a change in a state and the second one when a props change, the second one is a lie,
  if you do the exercise to pass thought props a let variable and update the value with a button, when that happen in memory let variable change but actually is not causing a re-render.

  //TODO this point is not clear.

- as something to know, react in stricmode re-render everything twice, this happen because react re-validate some erros(not remennber back here)
