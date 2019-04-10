import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleImage(event) {
    this.props.getImage(URL.createObjectURL(event.target.files[0]))
  }

  render() {
    const { camera } = this.props;
    let { modelLoaded } = this.props;
    //let isInWebAppiOS = (window.navigator.standalone === true);
    const isInWebAppiOS = () => ('standalone' in window.navigator) && (window.navigator.standalone);
    const isSafari = () => {
      const ua = window.navigator.userAgent;
      const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
      var webkit = !!ua.match(/WebKit/i);
      var iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
      return iOSSafari;
    }
    const isiOS = () => {
      const ua = window.navigator.userAgent;
      return (!!ua.match(/iPad/i) || !!ua.match(/iPhone/i))
    }

    //console.log(isiOS());
    //console.log(isInWebAppiOS());
    //console.log(isSafari());

    return (
      <div className="input-container">
        {
          //(!isInWebAppiOS() || isSafari())
          (!isiOS() || (isSafari() && !isInWebAppiOS()))
            ? (
              <button
                onClick={() => (camera) ? this.props.updateCamera(false) : this.props.updateCamera(true)}
                className="input-button"
                onTouchStart={() => ""}
              >
                Camera
              </button>
            )
            : (
              <>
              <input
                type="file"
                id="file-input"
                accept="image/*"
                capture="camera"
                className='input-buttons'
                onChange={(event) => this.handleImage(event)}
              />
              <label
              type="button"
              htmlFor="file-input" 
              className="input-buttons"
              onClick={() => ""}
              onTouchStart={() => ""}>
              Upload File
              </label>
              </>
            )
        }
        <button
          onClick={() => this.props.predict()}
          className="input-button"
          onTouchStart={() => ""}
          disabled={!modelLoaded}
        >
          Predict
        </button>
      </div>
    )

  }
}

export default Input;