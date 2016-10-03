import { applyMiddleware } from 'redux';
import AddressMiddleware from './address_middleware';
import ElectionMiddleware from './election_middleware';

const masterMiddleware = applyMiddleware(
  ElectionMiddleware,
  AddressMiddleware
);

export default masterMiddleware;
