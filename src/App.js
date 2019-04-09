import React, { Component } from 'react';
import './App.css';
import doggo from './dog.jpg'
import outputClasses from './tfjs/outputClasses.json';

import * as tf from '@tensorflow/tfjs';

import ImageContainer from './components/ImageContainer';
import Input from './components/Input';
import PredictionOutput from './components/PredictionOutput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: doggo,
      camera: false,
      modelLoaded: false,
      prediction: null
    };
    this.updateCamera = this.updateCamera.bind(this);
    this.getImage = this.getImage.bind(this);
    this.predict = this.predict.bind(this);
    this.loadModel = this.loadModel.bind(this);
  }

  componentDidMount() {
    this.loadModel();
  }

  updateCamera(data) {
    this.setState({ camera: data })
  }

  async loadModel() {
    this.outputClasses = outputClasses;
    this.model = await tf.loadLayersModel("https://s3-us-west-1.amazonaws.com/wsbuck/tfjs/model.json");
    this.setState({ modelLoaded: true });
    const result = tf.tidy(
      () => this.model.predict(tf.zeros(
        [1, 224, 224, 3])));
    await result.data();
    result.dispose();
  }

  getImage(img) {
    this.setState({ image: img })
  }

  preprocessImage(img) {
    let tensor = tf.browser.fromPixels(img)
      .resizeNearestNeighbor([224, 224])
      .toFloat();

    let offset = tf.scalar(127.5);
    return tensor.sub(offset)
      .div(offset)
      .expandDims();

  }

  async getTopKClasses(logits, topK) {
    const values = await logits.data();

    const valuesAndIndices = [];
    for (let i = 0; i < values.length; i++) {
      valuesAndIndices.push({ value: values[i], index: i });
    }
    valuesAndIndices.sort((a, b) => {
      return b.value - a.value;
    });
    const topkValues = new Float32Array(topK);
    const topkIndices = new Int32Array(topK);
    for (let i = 0; i < topK; i++) {
      topkValues[i] = valuesAndIndices[i].value;
      topkIndices[i] = valuesAndIndices[i].index;
    }

    const topClassesAndProbs = [];
    for (let i = 0; i < topkIndices.length; i++) {
      topClassesAndProbs.push({
        className: this.outputClasses[topkIndices[i]],
        probability: topkValues[i]
      })
    }
    return topClassesAndProbs;
  }

  async predict() {
    const imgElement = document.querySelector('img');
    const logits = tf.tidy(() => {
      // tf.browser.fromPixels() returns a Tensor from an image element.
      const img = tf.browser.fromPixels(imgElement)
        .resizeNearestNeighbor([224, 224])
        .toFloat();
      const offset = tf.scalar(127.5);
      // Normalize the image from [0, 255] to [-1, 1].
      const normalized = img.sub(offset).div(offset);
      // Reshape to a single-element batch so we can pass it to predict.
      const batched = normalized.reshape([1, 224, 224, 3]);
      // Make a prediction through mobilenet.
      return this.model.predict(batched);
    });
    const classes = await this.getTopKClasses(logits, 3);
    this.setState({prediction: classes})
    console.log(classes);
  }

  render() {
    return (
      <div className="App">
        <ImageContainer
          image={this.state.image}
          camera={this.state.camera}
          getImage={this.getImage}
        />
        <PredictionOutput
          prediction={this.state.prediction}
        />
        <Input
          updateCamera={this.updateCamera}
          camera={this.state.camera}
          predict={this.predict}
          modelLoaded={this.state.modelLoaded}
          getImage={this.getImage}
        />
      </div>
    );
  }
}

export default App;