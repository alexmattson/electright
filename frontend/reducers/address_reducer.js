import { RECEIVE_ADDRESS,
         ADDRESS_ERROR
       } from '../actions/address_actions';
import merge from 'lodash/merge';


const AddresssReducer = (state = {}, action) => {
  switch(action.type){
    case RECEIVE_ADDRESS:
      return action.address.results[0];
    case ADDRESS_ERROR:
      alert(action.error);
      break;
    default:
      return state;
  }
};

export default AddresssReducer;
