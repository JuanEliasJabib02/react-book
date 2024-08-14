- Statess are the "memory" of our application
- React handle states with a hook useState()
- useState when the data that is stored changes instead of mutate the current value, just create another one and return the new, states are inmutable,so
  inside our hook, is created something that i gonna name, "history stack states".
- When a state change it cause a re-render...
  how we talk in component-life-cycle.md
- actually the only thing that cause a re-render in react is only a state changes, not the props...
- A children is re-rendered if his father was re-renderi
