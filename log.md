### 5/5

- `npx create-react-app shopping-cart/`
- GitHub create shopping-cart repo
- `git remote add origin git@github.com:Sedbastian/shopping-cart.git`
- `git branch -M main`
- `git push -u origin main`

### 6/5

- Eliminate create-react-app boilerplate
- Create `<Home>`
- `npm install react-router-dom`
- https://reactrouter.com/en/main/start/tutorial
- Create and render a browser router in index.js
- Add `<App>` to "/"
- Add `<ErrorPage>` to "/" `errorElement`
- Add `<Catalog>` to "/catalog" as children of "/"
- Add `<Cart>` to "/cart" as children of "/"
- **_Commit: `Add main routes`_**

- Add homepage and deploy scripts to package.json
- `npm install --save-dev gh-pages`
- `npm run build`
- `npm run deploy`

### 8/5

- Layout styles

### 10/5

- Layout styles
- Install FontAwesome dependencies:
  - `npm install @fortawesome/fontawesome-svg-core`
  - `@fortawesome/free-solid-svg-icons`
  - `npm i @fortawesome/react-fontawesome@latest`
- Add FontAwesome icons in Home.jsx
- Add currentTab State in Home.jsx

### 13/5

- Layout styles

### 14/5

- Layout styles: media queries

### 16/5

- Got rid of currentTab State in Home.jsx and manage currentTab className in Header.jsx using react-router-dom's useLocation hook.

- **_Commit: `Layout & refactor currentTab state`_**

- Begin writing jest tests

### 17/5

- Jest tests:
  - Describe `<App />`
  - Describe `<Header />`
  - Describe `<Home />`
  - Describe `<Footer />`

### 18/5

- Create `<Card />` component

### 19/5

- Create `<AddToCart />`component
- With https://react.dev/learn/extracting-state-logic-into-a-reducer and https://react.dev/learn/scaling-up-with-reducer-and-context as a guide:
  - Create CartContext.jsx to createContext: CartContext and CartDispatch Context
  - Modify `<App />`:
    - Add those Contexts wrapping it's children
    - Create function cartReducer
  - Modify `<AddToCart />`:
    - useContext(CartDispatchContext) in `<AddToCart />`
    - Create function AddToCart that dispatches "added" action

### 20/5

- Use a `new Map()` instead of an object for managing cart state
  - Change cart useReducer initial state to be a `new Map()`
  - Change cartReducer
- Add cartQuantity to cart Link and its style
- Add `<Cart />`'s products from cartContext

### 21/5

- Added different `<AddToCart />` functionalities whether `inCart` prop is true
- Jest tests:
  - `<Catalog />`
  - `<Card />`

### 22/5

- Jest tests:
  - `<AddToCart />`

### 23/5

- `<Cart />` refactor to show a products table

### 25/5

- Change whole content to be from "Finca La Venancia"
- Change Media Queries for Header and Home
- **_Commit: `Tests, Card and AddToCart component, CartContext, cartReducer`_**
- Add useEffect to `<Home />`, `<Catalog />` and `<Cart>` to make them scroll to top each time they're re-rendered
- More Venancia styling.
- **_Commit: `Add useEffect to scroll to top in Home, Catalog, Cart`_**

### 28/5

- Jest test:
  - System test
  