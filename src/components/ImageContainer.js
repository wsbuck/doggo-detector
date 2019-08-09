import React from 'react';

import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '95%',
    padding: theme.spacing(1),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    // background: '#37474f',
    maxWidth: '600px',
  },
}));

export default function ImageContainer(props) {
  const snapShotCanvas = document.createElement('canvas');
  // const IMAGE_WIDTH = 300;
  // const IMAGE_HEIGHT = 300;
  // const [currentStream, setCurrentStream] = useState(null);
  // eslint-disable-next-line no-unused-vars
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