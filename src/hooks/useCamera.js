import React, { useState, useEffect } from 'react';

export default function useCamera(status) {
  const [cameraStatus, setCameraStatus] = useState(false);
  const vid = document.querySelector('video');

  function startStream() {
    const constraints = {
      audio: false,
      video: { facingMode: 'environment' }
    };
    navigator.mediaDevices.getUserMedia(constraints)
      .then(stream => {
        vid.srcObject = stream;
      })
      .catch(err => {
        console.log(err);
      });
  }

  function stopStream() {
    const stream = vid.srcObject;
    stream.getTracks().forEach(track => {
      track.stop();
    });
    vid.srcObject = null;
  }

  function handleCameraChange(status) {
    if (!vid.srcObject && status === true) {
      startStream();
      setCameraStatus(true);
    } else {
      stopStream();
      setCameraStatus(false);
    }
  }

  useEffect(() => {
    handleCameraChange(status);
    return () => {
      handleCameraChange(false);
    }
  });

  return cameraStatus;
}