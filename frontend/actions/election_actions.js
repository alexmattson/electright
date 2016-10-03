export const REQUEST_LOCAL_ELECTIONS = "REQUEST_LOCAL_ELECTIONS";
export const REQUEST_NATIONAL_ELECTIONS = "REQUEST_NATIONAL_ELECTIONS";
export const RECEIVE_LOCAL_ELECTIONS = "RECEIVE_LOCAL_ELECTIONS";
export const RECEIVE_NATIONAL_ELECTIONS = "RECEIVE_NATIONAL_ELECTIONS";
export const REQUEST_CANIDATES = "REQUEST_CANIDATES";
export const RECEIVE_CANIDATES = "RECEIVE_CANIDATES";

/////////////////
export const REQUEST_ELECTIONS = "REQUEST_ELECTIONS";
export const REQUEST_ELECTION = "REQUEST_ELECTION";
export const RECEIVE_ELECTION = "RECEIVE_ELECTION";
export const REMOVE_ELECTION = "REMOVE_ELECTION";
export const CREATE_ELECTION = "CREATE_ELECTION";
export const UPDATE_ELECTION = "UPDATE_ELECTION";
export const DESTROY_ELECTION = "DESTROY_ELECTION";
export const ELECTION_ERROR = "ELECTION_ERROR";



export const requestLocalElections = address => ({
  type: REQUEST_LOCAL_ELECTIONS,
  address
});

export const requestNationalElections = address => ({
  type: REQUEST_NATIONAL_ELECTIONS,
  address
});

export const receiveLocalElections = elections => ({
  type: RECEIVE_LOCAL_ELECTIONS,
  elections
});

export const receiveNationalElections = elections => ({
  type: RECEIVE_NATIONAL_ELECTIONS,
  elections
});

export const requestCanidates = id => ({
  type: REQUEST_CANIDATES,
  id
});

export const receiveCanidates = (canidates, id) => ({
  type: RECEIVE_CANIDATES,
  canidates,
  id
});

////////////////////////

export const requestElection = id => ({
  type: REQUEST_ELECTION,
  id
});


export const receiveElection = election => ({
  type: RECEIVE_ELECTION,
  election
});

export const removeElection = election => ({
  type: REMOVE_ELECTION,
  election
});

export const createElection = election => ({
  type: CREATE_ELECTION,
  election
});

export const updateElection = election => ({
  type: UPDATE_ELECTION,
  election
});

export const destroyElection = election => ({
  type: DESTROY_ELECTION,
  election
});

export const electionError = error => ({
  type: ELECTION_ERROR,
  error
});
