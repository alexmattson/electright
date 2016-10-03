import { connect } from 'react-redux';
import Address from './address';
// Actions
import { requestAddress } from '../../actions/address_actions';

const mapStateToProps = state => ({
  address: state.address
});

const mapDispatchToProps = dispatch => ({
  requestAddress: address => dispatch(requestAddress(address))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Address);
