# es6-modules

A working proof of concept for using native ES6 modules in the browser

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

_Quick Overview_
Android 67+
Chrome 61+
Edge 16+
iOS 11.2+
Firefox 60+
Safari 11+
