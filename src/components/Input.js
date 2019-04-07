import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { camera } = this.props;
    let { modelLoaded } = this.props;

    return (
      <div className="input-container">
        <button
          onClick={() => (camera) ? this.props.updateCamera(false) : this.props.updateCamera(true)}
          className="input-button"
          onTouchStart={() => ""}
        >
          Camera
        </button>
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