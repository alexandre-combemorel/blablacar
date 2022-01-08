# How to

## Run the project
You should have a `.env.local` set up with the api key inside
Put it at the root of the project
```shell
REACT_APP_API_KEY=myApiKeyHere
```

Then run `npm start`

## Structure and concept of the project

### Techno used
this project is using:
- Typescript > 4.5
- React Testing library
- React > 17

### Core structure
The main folder are:
- `models`: contains all the type / interface used through the app
- `components`: which will have all the shared components through the app
- `pages`: which will have all the page and a folder structure inside
- `services`: which will contains all the necessary apiRessource call and constants for the overall app
- `test`: will have the `mockData` folder used for mocking the data on test api call and the helpers for testing files 
files:
- `styleguide.scss`: which contains the basic variables used on the app to provide consistency on the styles

### Components folder
a component folder is structured with sub folder which are described below: (the usage of what's described is only for the current component not outside)
- `components`: contains the sub components used in the current component 
- `services`: which contains all the helpers / constant / api calls files for the current component
and files:
- `.test.tsx`: which will be the "unit" test of the current component
- `.scss`: which will have styles scoped to the component


## Getting Started with Create React BbcApp

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React BbcApp documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
