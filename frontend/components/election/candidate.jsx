import React from 'react';
import { isEmpty } from 'lodash';

// Components

class Candidate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let candidate = this.props.candidate;
    return(
      <li key={`candidate${candidate.ID}`}>
        <div className='image'>
          <img src={candidate.Image}></img>
        </div>
        {candidate.Name}
      </li>
    );
  }
}

export default Candidate;
