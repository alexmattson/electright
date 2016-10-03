import React from 'react';
import { Link } from 'react-router';
import { withRouter } from 'react-router';

import ElectionContainer from './election/election_container';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <ElectionContainer />
    );
  }
}

export default withRouter(App);
