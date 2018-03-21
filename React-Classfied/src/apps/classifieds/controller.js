import { connect } from 'react-redux'
import { loginAction } from '../../store/reducer_actions';
import LoginPage from './index';
import { createSelector } from 'reselect';

/**
 * Selectors can compute derived data, allowing Redux to store the minimal possible state.
 **/
const nameSelector = createSelector(state => state.name, name => name);
const isLoggedInSelector = createSelector(state => state.isLoggedIn, isLoggedIn => isLoggedIn);

const mapStateToProps = state => ({
  name: nameSelector(state),
  isLoggedIn:isLoggedInSelector(state)
});

const mapDispatchToProps = dispatch => ({
  loginAction: name => dispatch(loginAction(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
