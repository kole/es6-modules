# es6-modules

A working proof of concept for using native ES6 modules in the browser.

Insipred by [this contentful article](https://www.contentful.com/blog/2017/04/04/es6-modules-support-lands-in-browsers-is-it-time-to-rethink-bundling/)

Additional reading [here](https://medium.freecodecamp.org/you-might-not-need-to-transpile-your-javascript-4d5e0a438ca)

# Installation

- Clone repo locally
- `npm install`

# Usage

- `npm start`
- Open modern browser to `http://localhost:8080`

# Legacy browser support

Chrome 60, Safari 10, Internet Explorer (all), Firefox 59, etc. did not support ES6 modules and can be targeted with the `nomodule` flag inside the script tag as can be found in the `index.html` file in this project. So if your project requires support for legacy browsers, you can still use Babel and Webpack to transpile and bundle a huge ES5 monolith for those users to download all at once.

# Browser Support

[Full List](https://caniuse.com/#feat=es6-module)

**Quick Overview**

- Android 67+
- Chrome 61+
- Edge 16+
- Firefox 60+
- Safari 11+
- Safari (iOS) 11.2+

# Cons

The biggest con I have found so far is utilizing 3rd party npm modules. As best as I can tell, the only way to do this successfully is to copy the module you want to use into a local directory so it runs through your minification process and gets put into the dist folder.

Simply installing a npm module and then importing it into the file you want to use won't work.
