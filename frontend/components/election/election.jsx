import React from 'react';
import { isEmpty } from 'lodash';
import AddressContainer from '../address/address_container';

// Components
import Candidate from './candidate';

class Election extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentRace: 'president of the united states'
    };

    this.results = this.results.bind(this);
  }

  componentWillReceiveProps(newProps) {
    // Get Local election ids
    if (isEmpty(newProps.elections.localElections)) {
      this.props.requestLocalElections(newProps.address);
    }

    // Get National election ids
    else if (isEmpty(newProps.elections.nationalElections)) {
      this.props.requestNationalElections(newProps.address);
    }

    // Get Candidates
    else if (isEmpty(newProps.elections.candidates)) {
      // Local
      let electionIds = [];
      newProps.elections.localElections.forEach(election => {
        electionIds.push(election.ID);
      });
      electionIds.forEach(id => {
        this.props.requestCandidates(id);
      });
      // National
      this.props.requestPresidentandVice();

    }
    // If everything is received then loading is done
    else {
      this.setState({loading: false});
    }
  }

  results() {
    let elections = [];
    let races = this.props.elections.candidates;
    let race = races[this.state.currentRace];
    let candidates = [];

    if (race) {
      race.forEach(candidate => {
        candidates.push(
          <Candidate candidate={candidate} />
        );
      });
    }

    elections.push(
      <ul key='candidates'>
        <h1>{this.state.currentRace}</h1>
        {candidates}
      </ul>
    );

    return (
      <div>
        {elections}
      </div>
    );
  }

  renderList() {
    let races = this.props.elections.candidates;
    let elections = Object.keys(races).map(race => <li>{race}</li>);
    return (
      <ul>
        {elections}
      </ul>
    );
  }


  render() {
    if (isEmpty(this.props.address)) {
      return ( <AddressContainer /> );
    } else if (this.state.loading) {
      return (
        <div className='spinner-container'>
          <div className="spinner"></div>
        </div>
      );
    } else {
      return(
        <div>
          {this.renderList()}
          {this.results()}
        </div>
      );
    }
  }
}

export default Election;
