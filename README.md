# Tonomy-ID-Demo

A reactjs application to show demo flows with Tonomy ID

## Staging

<https://tonomy-id-staging.tonomy.foundation>

## Dependancies

MAKE SURE YOU ARE WORKING FROM THE `DEVELOPMENT` BRANCH!!!

- Linux debian distribution (Ubuntu 20.0.4 LTS used)
- [Nodejs](https://nodejs.org) v16.4.1+ suggested installed with [nvm](https://github.com/nvm-sh/nvm)

## Usage

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Linting

Linting is done with `eslint`. Install the recommended VS Code plugin to see markers in your code.

```bash
npm run lint
```

### Configuration and environment variables

Set the configuration variables in the desired file in `./src/config`

Config file is choosing based on the value of environment variable `REACT_APP_NODE_ENV`. `config.json` is used by default.

Other environment variables override the values in the config file:

- REACT_APP_BLOCKCHAIN_URL
- REACT_APP_TONOMY_ID_LINK
