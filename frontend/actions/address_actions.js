export const REQUEST_ADDRESS = "REQUEST_ADDRESS";
export const RECEIVE_ADDRESS = "RECEIVE_ADDRESS";
export const UPDATE_ADDRESS = "UPDATE_ADDRESS";
export const ADDRESS_ERROR = "ADDRESS_ERROR";


export const requestAddress = address => ({
  type: REQUEST_ADDRESS,
  address
});

export const receiveAddress = address => ({
  type: RECEIVE_ADDRESS,
  address
});

export const updateAddress = address => ({
  type: UPDATE_ADDRESS,
  address
});

export const addressError = error => ({
  type: ADDRESS_ERROR,
  error
});
