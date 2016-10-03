import { RECEIVE_LOCAL_ELECTIONS,
         RECEIVE_NATIONAL_ELECTIONS,
         RECEIVE_CANDIDATES,
         ELECTION_ERROR
       } from '../actions/election_actions';
import { merge, clone } from 'lodash';

let preloadedState = {
  localElections: {},
  nationalElections: {},
  candidates: {}
};

const ElectionsReducer = (state = preloadedState, action) => {
  switch(action.type){
    case RECEIVE_LOCAL_ELECTIONS:
      let newLocal = {localElections: action.elections.Results};
      return merge({}, state, newLocal);
    case RECEIVE_NATIONAL_ELECTIONS:
      let newNational = {nationalElections: action.elections.Results};
      return merge({}, state, newNational);
    case RECEIVE_CANDIDATES:
      let newCandidates = clone(state.candidates);
      action.candidates.Results.forEach(candidate => {
        let office = candidate.Offices[0];
        if (office.IsElected === "1") {
          let race = newCandidates[office.Name.toLowerCase()] || [];
          race.push(candidate);
          newCandidates[office.Name.toLowerCase()] = race;
        }
      });
      return merge({}, state, {candidates: newCandidates});
    case ELECTION_ERROR:
      alert(action.error);
      break;
    default:
      return state;
  }
};

export default ElectionsReducer;
