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

    return (
      <div className="input-container">
        {
          (!isInWebAppiOS())
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