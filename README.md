# README

## Doge Detector Frontend
Client for the a dog breed classifier named Doge Detector. UI is built with React
and the Material-UI framework. This project is a Progressive Web App. Load Doge
Detector into your browser and then choose to add it to your homescreen. The app
will continue to work offline and make predictions.

The AI model has been trained on a GPU and then converted to a tensorflowjs model.
The model is loaded into your browser and the prediction is made entirely on your
device. Your images never get sent to a server and never leave your device!

For more information about the actual AI model, visit the git hub repo listed
in the References section.

## References
- [wsbuck/DogeNetTFModel](https://github.com/wsbuck/DogeNetTFModel)
- [Tensorflow.js](https://www.tensorflow.org/js/)
- [PWA](https://en.wikipedia.org/wiki/Progressive_web_applications)





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.