import React, { useState, Component } from 'react';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



// class ImageContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentStream: null
//     };
//     this.startStream = this.startStream.bind(this);
//     this.stopStream = this.stopStream.bind(this);
//     this.currentStream = null;
//     this.snapShotCanvas = document.createElement('canvas');
//     this.IMAGE_WIDTH = 300;
//     this.IMAGE_HEIGHT = 300;
//     this.image = this.props.image;
//   }

//   componentWillUpdate() {
//     // const { image } = this.props;
//     const { camera } = this.props;
//     if (camera) {
//       this.startStream();
//     } else {
//       this.stopStream();
//     }
//   }

//   startStream() {
//     var constraints = {
//       audio: false,
//       video: { facingMode: 'environment' }
//     };
//     const video = document.querySelector('video');
//     navigator.mediaDevices
//       .getUserMedia(constraints)
//       .then(stream => {
//         this.currentStream = stream;
//         video.srcObject = stream;
//         return stream;
//       })
//       .catch(error => {
//         console.log(error);
//       })
//   }

//   stopStream() {
//     if (this.currentStream) {
//       const video = document.querySelector('video');
//       this.snapShotCanvas.height = video.videoWidth;
//       this.snapShotCanvas.width = video.videoHeight;
//       this.snapShotCanvas.height = this.IMAGE_HEIGHT;
//       this.snapShotCanvas.width = this.IMAGE_WIDTH;
//       this.snapShotCanvas.getContext('2d').drawImage(
//         video,
//         0,
//         0,
//         this.snapShotCanvas.width, this.snapShotCanvas.height)
//       let img = this.snapShotCanvas.toDataURL("image/png");
//       //this.props.getImage(this.snapShotCanvas.toDataURL("image/webp"));
//       this.currentStream.getTracks().forEach(track => {
//         track.stop();
//       });
//       this.currentStream = null;
//       this.props.getImage(img);
//     }
//   }

//   render() {
//     // const { image } = this.props;
//     // const { camera } = this.props;
//     // if (camera) {
//     //   this.startStream();
//     // } else {
//     //   this.stopStream();
//     // }

//     return (
//       <div className="doggo-image-container">
//         <video
//           alt="doggo"
//           className={this.props.camera ? "doggo-image" : "hidden"}
//           autoPlay
//           playsInline
//         />
//         <img src={this.props.image} alt="doggo" className="doggo-image" />
//       </div>
//     )
//   }
// }

// export default ImageContainer;


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    background: '#37474f',
    maxWidth: '600px',
  },
}));

export default function ImageContainer(props) {
  const snapShotCanvas = document.createElement('canvas');
  const IMAGE_WIDTH = 300;
  const IMAGE_HEIGHT = 300;
  // const [currentStream, setCurrentStream] = useState(null);
  let currentStream = null;
  const classes = useStyles();

  function startStream() {
    var constraints = {
      audio: false,
      video: { facingMode: 'environment' }
    };
    const video = document.querySelector('video');
    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(stream => {
        // setCurrentStream(stream);
        currentStream = stream;
        video.srcObject = stream;
        return stream;
      })
      .catch(error => {
        console.log(error);
      })
  }

  function stopStream(vid) {
    if (vid.srcObject) {
      const currentStream = vid.srcObject;
      console.log('ok');
      snapShotCanvas.height = vid.videoHeight;
      snapShotCanvas.width = vid.videoWidth;
      // snapShotCanvas.height = IMAGE_HEIGHT;
      // snapShotCanvas.width = IMAGE_WIDTH;
      snapShotCanvas.getContext('2d').drawImage(
        vid,
        0,
        0,
        snapShotCanvas.width,
        snapShotCanvas.height
      )
      let img = snapShotCanvas.toDataURL("image/png");
      currentStream.getTracks().forEach(track => {
        track.stop();
      });
      vid.srcObject = null;
      props.getImage(img);
    }
  }

  const { image, cameraStatus } = props;
  const vid = document.querySelector('video');

  if (cameraStatus) {
    startStream(vid);
  } else if (vid) {
    stopStream(vid);
  }


  return (
    <Paper className={classes.root} color='primary'>
      <video
        alt="doggo"
        className={cameraStatus ? "doggo-images" : "hidden"}
        autoPlay
        playsInline
      />
      <img 
        src={image} alt="doggo" 
        className={!cameraStatus ? "doggo-images" : "hidden"}
      />
    </Paper>
    // <div className="doggo-image-container">
    //   <video
    //     alt="doggo"
    //     className={cameraStatus ? "doggo-image" : "hidden"}
    //     autoPlay
    //     playsInline
    //   />
    //   <img src={image} alt="doggo" className="doggo-image" />
    // </div>
  );
}