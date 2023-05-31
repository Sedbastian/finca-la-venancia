# Shopping Cart App

- Live preview at https://sedbastian.github.io/finca-la-venancia/

- Simple shopping cart made with React using create-react-app, client side routing with react-router-dom.

- Tested using Jest and testing-library.

- Responsive design on both mobile and desktop devices.

### State Management

Cart state logic implemented combining a _reducer_ with **context** to let any component read and update state above it.
To provide state and the dispatch function to components below **context**:
  - Create two contexts (for state and for dispatch functions).
  - Provide both contexts from the component that uses the reducer.
  - Use either context from components that need to read them.