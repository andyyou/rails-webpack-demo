'use strict';

import React from 'react';

class Hey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {changed: false}
  }

  _toggle() {
    this.setState({changed: !this.state.changed})
  }

  render() {
    return (
      <div onClick={this._toggle.bind(this)}>
        {
          this.state.changed ? "Hey!":"What's going on!?"
        }
      </div>
    );
  }
}

export default Hey;