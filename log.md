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

