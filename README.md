# What is most costlier operations in browser?

-   When we are change the node in DOM tree.

# How to make a project ready for production?

-   Bundler - it packages our app to push our code to production
-   Transit dependencies (it is one package will install its own dependencies)
-   npx parcel index.html - executing a package index.html
-   cdn link is not a prefer way to install react as we have to make a network call to use the react
-   install react (npm install react)
-   install react dom (npm install react-dom)

# parcel

-   DEV build
-   Local server
-   HMR = Hot Module Replacement
-   File watching Algorithm - written in C++
-   Caching = Faster Builds
-   Image optimization
-   Minification of all the files
-   Bundling
-   Compress the files
-   Consistent Hashing
-   Code Splitting
-   Differential Bundling - supports older browsers
-   Diagnostic
-   Error handling
-   HTTPs
-   Tree Shaking - remove unused code
-   Different dev and prod bundles

# React.createElement => Object => HTMLElement (render)

# JSX

-   it is not HTML is JS
-   it is a HTML or XML like syntax

# React Component

-   class based component
-   functional based component

# React Functional Component

-   it is normal js function
-   it should start with capital letter

# Two Types of Exports/Imports

-   Default export/import
    export default Component
    import Component from 'path';

-   Named export/import
    export constants Component;
    import { Component } from 'path';

# Hooks in React

-   Normal JS functions which react gives to us
-   useState()
    -   it returns a array - never creates useState inside the body component
    -   try to call hooks at the top
    -   never create useState inside the if else statement
-   useEffect()

    -   cb functions will be called when the UI is rendered(if dependency array is not available)
    -   if there us dependency array than it will be called when condition is meet

-

create a shimmer UI component and show it until API call is completed
