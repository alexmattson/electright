// Election API Util
import { fetchLocalElections,
         fetchNationalElections,
         fetchCanidates
       } from '../util/election_api_util';
// Election Action
import { receiveLocalElections,
         receiveNationalElections,
         receiveCanidates,
         electionError,
// Election Constants
         REQUEST_LOCAL_ELECTIONS,
         REQUEST_NATIONAL_ELECTIONS,
         REQUEST_CANIDATES,
         DESTROY_ELECTION
       } from '../actions/election_actions';

 export default ({getState, dispatch}) => next => action => {
   const localElectionsSuccess = data => dispatch(receiveLocalElections(data));
   const nationalElectionsSuccess = data => dispatch(receiveNationalElections(data));
   const canidateSuccess = electionId => {
     return (data) => { dispatch(receiveCanidates(data, electionId)); };
   };
   const electionErrored = data => dispatch(electionError(data.responseJSON));

   switch(action.type){
     case REQUEST_LOCAL_ELECTIONS:
       fetchLocalElections(action.address, localElectionsSuccess);
       return next(action);
     case REQUEST_NATIONAL_ELECTIONS:
       fetchNationalElections(action.address, nationalElectionsSuccess);
       return next(action);
     case REQUEST_CANIDATES:
       fetchCanidates(action.id, canidateSuccess(action.id));
       return next(action);
     default:
       return next(action);
   }
 };
