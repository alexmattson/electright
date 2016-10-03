import { combineReducers } from 'redux';
import AddressReducer from './address_reducer';
import ElectionReducer from './election_reducer';

const RootReducer = combineReducers({
  elections: ElectionReducer,
  address: AddressReducer
});

export default RootReducer;
