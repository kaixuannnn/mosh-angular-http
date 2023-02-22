1. HTTP Client

- First, we need to import http module into our module provider
- We do HTTP dependency injection inside our component constructor
- We call the get api and we use subscribe for the callback

2. POST API

- we add a template variable to the input field, the element is actuall a **HTMLInputElement** type
- we a private inside the argument of a method, means we declare it as a field

3. Oninit

- Constructor shouldn't perform expensive operation
- Angular has lifecycle hooks,
  - creates a compoenent (Oninit- it will called when a component is initialized)
  - renders it
  - creates and renders its children
- Example of Lifecycles hook

  - OnInit
  - OnChanges
  - DoCheck
  - AfterContentInit

  5. Unexpected Error

  - Server is offline
  - Network is down
  - Unhandled exceptions

  6. Expected

  - "Not found" errors(404)
  - "Bad request" errors(400)
