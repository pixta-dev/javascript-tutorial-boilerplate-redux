import { connect } from 'react-redux';
import Link from './Link';
import setVisibilityFilter from '../actions/setVisibilityFilter';

function mapStateToProps({ visibilityFilter }, { filter, children }) {
  return {
    active: filter === visibilityFilter,
    children,
    visibilityFilter,
  };
}

function mapDispatchToProps(dispatch, { filter }) {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(filter));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
