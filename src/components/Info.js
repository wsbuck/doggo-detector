import React, { Component } from 'react';

import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { Dialog } from '@material-ui/core';

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  }

  handleClose = () => {
    this.setState({ open: false });
  }


  render() {
    return (
      <div>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle>Hello!</DialogTitle>
          <DialogContent>
            <p className="info-text">
              This is made with tensorflow.js and React.
              The model is mobilenet retrained only on the dogs of ImageNet.
            </p>
            <p className="info-text">
              The code for this project can be found <a href="https://github.com/wsbuck/doge-detector">here</a> and the tensorflow model is <a href="https://github.com/wsbuck/DogeNetTFModel">here</a>.
            </p>
          </DialogContent>
        </Dialog>

        <button
          className="info-button" onClick={this.handleClickOpen}
        >
          ?
                </button>
      </div>
    );
  }
}

export default Info;