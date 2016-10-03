import { RECEIVE_LOCAL_ELECTIONS,
         RECEIVE_NATIONAL_ELECTIONS,
         RECEIVE_CANIDATES,
         ELECTION_ERROR
       } from '../actions/election_actions';
import merge from 'lodash/merge';

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
    case RECEIVE_CANIDATES:
      debugger
      let newCandidates = merge({},
                                  state.candidates,
                                  {[action.id]: action.candidates});
      let newState = merge({}, state, newCandidates);
      debugger;
      return merge({}, state, newState);
    case ELECTION_ERROR:
      alert(action.error);
      break;
    default:
      return state;
  }
};

export default ElectionsReducer;
