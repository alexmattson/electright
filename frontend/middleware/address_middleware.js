// Address API Util
import { fetchAddress
       } from '../util/address_api_util';
// Address Action
import { receiveAddress,
         addressError,
// Address Constants
         REQUEST_ADDRESS,
         UPDATE_ADDRESS
       } from '../actions/address_actions';

 export default ({getState, dispatch}) => next => action => {
   const addressSuccess = data => dispatch(receiveAddress(data));
   const addressErrored = data => dispatch(addressError(data.responseJSON));
   switch(action.type){
     case REQUEST_ADDRESS:
       fetchAddress(action.address, addressSuccess, addressErrored);
       return next(action);
     default:
       return next(action);
   }
 };
