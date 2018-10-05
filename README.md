# reactor
Template package for Reactive data app using R, plumber, and react

## Installation instructions

This package requires npm to install dependencies. 

1. `$ cd reactapp`
2. `$ npm install`
3. `$ npm run start`

To build the application:

* `$ npm run build`

To test the application can be launched from R, run `launchAppDev()`.

This will copy the `index.html` and bundled javascript to the `inst/api` folder.

The annotated `plumber` functions from `functions.R` will be copied to `inst/api`.
