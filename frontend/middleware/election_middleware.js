// Election API Util
import { fetchLocalElections,
         fetchNationalElections,
         fetchCandidates,
         fetchPresidentAndVice
       } from '../util/election_api_util';
// Election Action
import { receiveLocalElections,
         receiveNationalElections,
         receiveCandidates,
         electionError,
// Election Constants
         REQUEST_LOCAL_ELECTIONS,
         REQUEST_NATIONAL_ELECTIONS,
         REQUEST_CANDIDATES,
         REQUEST_PRESIDENT_AND_VICE,
         DESTROY_ELECTION
       } from '../actions/election_actions';

 export default ({getState, dispatch}) => next => action => {
   const localElectionsSuccess = data => dispatch(receiveLocalElections(data));
   const nationalElectionsSuccess = data => dispatch(receiveNationalElections(data));
   const candidateSuccess = electionId => {
     return (data) => { dispatch(receiveCandidates(data, electionId)); };
   };
   const electionErrored = data => dispatch(electionError(data.responseJSON));

   switch(action.type){
     case REQUEST_LOCAL_ELECTIONS:
       fetchLocalElections(action.address, localElectionsSuccess);
       return next(action);
     case REQUEST_NATIONAL_ELECTIONS:
       fetchNationalElections(action.address, nationalElectionsSuccess);
       return next(action);
     case REQUEST_CANDIDATES:
       fetchCandidates(action.id, candidateSuccess(action.id));
       return next(action);
      case REQUEST_PRESIDENT_AND_VICE:
        fetchPresidentAndVice(candidateSuccess());
     default:
       return next(action);
   }
 };
