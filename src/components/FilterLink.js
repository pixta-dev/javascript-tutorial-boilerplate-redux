import { connect } from 'react-redux';
import Link from './Link';

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
      dispatch({
        type: 'SET_VISIBILITY_FILTER',
        filter,
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
