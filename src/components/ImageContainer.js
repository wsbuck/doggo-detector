import React, { Component } from 'react';

class ImageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStream: null
    };
    this.startStream = this.startStream.bind(this);
    this.stopStream = this.stopStream.bind(this);
    this.currentStream = null;
    this.snapShotCanvas = document.createElement('canvas');
    this.IMAGE_WIDTH = 300;
    this.IMAGE_HEIGHT = 300;
  }

  //componentWillUpdate() {
  //  console.log('updated');
  //}

  startStream() {
    var constraints = {
      audio: false,
      video: { facingMode: 'environment' }
    };
    const video = document.querySelector('video');
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        this.currentStream = stream;
        video.srcObject = stream;
        return stream;
      })
      .catch(error => {
        console.log(error);
      })
  }

  stopStream() {
    if (this.currentStream) {
      const video = document.querySelector('video');
      this.snapShotCanvas.height = video.videoWidth;
      this.snapShotCanvas.width = video.videoHeight;
      this.snapShotCanvas.height = this.IMAGE_HEIGHT;
      this.snapShotCanvas.width = this.IMAGE_WIDTH;
      this.snapShotCanvas.getContext('2d').drawImage(
        video,
        0,
        0,
        this.snapShotCanvas.width, this.snapShotCanvas.height)
      let img = this.snapShotCanvas.toDataURL("image/png");
      //this.props.getImage(this.snapShotCanvas.toDataURL("image/webp"));
      this.currentStream.getTracks().forEach(track => {
        track.stop();
      });
      this.currentStream = null;
      this.props.getImage(img);
    }
  }

  render() {
    const { image } = this.props;
    const { camera } = this.props;
    if (camera) {
      this.startStream();
    } else {
      this.stopStream();
    }

    return (
      <div className="doggo-image-container">
        <video
          alt="doggo"
          className={camera ? "doggo-image" : "hidden"}
          autoPlay
          playsInline
        />
        <img src={image} alt="doggo" className="doggo-image" />
      </div>
    )
  }
}

export default ImageContainer;