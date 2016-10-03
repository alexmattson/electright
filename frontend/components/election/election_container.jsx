import { connect } from 'react-redux';
import Election from './election';
// Actions
import { requestLocalElections,
         requestNationalElections,
         requestCandidates,
         requestPresidentandVice
       } from '../../actions/election_actions';


const mapStateToProps = state => ({
  address: state.address,
  elections: state.elections
});

const mapDispatchToProps = dispatch => ({
  requestLocalElections: address => dispatch(requestLocalElections(address)),
  requestNationalElections: address => dispatch(requestNationalElections(address)),
  requestCandidates: id => dispatch(requestCandidates(id)),
  requestPresidentandVice: () => dispatch(requestPresidentandVice())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Election);
