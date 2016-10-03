import { connect } from 'react-redux';
import Election from './election';
// Actions
import { requestLocalElections,
         requestNationalElections,
         requestCanidates
       } from '../../actions/election_actions';


const mapStateToProps = state => ({
  address: state.address,
  elections: state.elections
});

const mapDispatchToProps = dispatch => ({
  requestLocalElections: address => dispatch(requestLocalElections(address)),
  requestNationalElections: address => dispatch(requestNationalElections(address)),
  requestCanidates: id => dispatch(requestCanidates(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Election);
