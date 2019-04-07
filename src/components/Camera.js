import React, { Component } from 'react';

class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="doggo-image-container">
                <video alt="doggo image" className="doggo-image" />
            </div>
        )
    }
}

export default Camera;