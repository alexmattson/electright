import React from 'react';
import { isEmpty } from 'lodash';
import AddressContainer from '../address/address_container';


// Components

class Election extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    this.results = this.results.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // Get Local election ids
    if (isEmpty(newProps.elections.localElections)) {
      this.props.requestLocalElections(newProps.address);
    } else

    // Get National election ids
    if (isEmpty(newProps.elections.nationalElections)) {
      this.props.requestNationalElections(newProps.address);
    } else

    // Get Candidates
    if (isEmpty(newProps.elections.candidates)) {

      let electionIds = [];
      newProps.elections.localElections.forEach(election => {
        electionIds.push(election.ID);
      });
      newProps.elections.nationalElections.forEach(election => {
        electionIds.push(election.ID);
      });

      electionIds.forEach(id => {
        this.props.requestCanidates(id);
      });
    }
  }

  results() {
    if (this.state.loading) {
      return ( <div>LOADING...</div> );
    } else {
      return (
        <div> Election Comp </div>
      );
    }
  }


  render() {
    if (isEmpty(this.props.address)) {
      return ( <AddressContainer /> );
    } else {
      return(
        <div>
          {this.results()}
        </div>
      );
    }
  }
}

export default Election;
