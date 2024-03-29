# Namaste React 🚀

# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Two types of Export/Import

- Default Export/Import
  export default Component;
  import Component from "path";

- Named Export/Import
  export const Component;
  import { Component } from "path";

# React Hooks

Normal JS utility functions - useState() - Super powerful State Variables in React

    - useEffect()

# React Algorithm - Reconciliation Algorithm (React Fiber: came in React 16) More on: React Fiber Architecture acdlite/react-fiber-architecture

- Virtual DOM - representation of an actual DOM
- Diff algorithm - find difference between two virtual DOM

# Redux Toolkit

    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to app
    - Cart Slice (cartSlice)
    - Dispatch(Action)
    - Selector

# Types of Testing (developer)

    - Unit Testing

- Integration Testing
- End to End testing

# Setting up Testing in the app using react testing library and jest

- Install React Testing Library
- Install Jest
- Install Babel dependencies
- Configure Babel
- Configure Parcel to disable default Babel transpilation
- Jest configuration - npx jest --init
- install jsdom library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel
- Install @testing-library/jest-dom
