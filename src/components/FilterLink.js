import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';

export default class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { filter, children } = this.props;
    const { store } = this.context;
    const { visibilityFilter } = store.getState();

    return (
      <Link
        active={filter === visibilityFilter}
        onClick={() => {
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter,
          });
        }}
      >
        {children}
      </Link>
    );
  }
}

FilterLink.contextTypes = {
  store: PropTypes.object,
};
