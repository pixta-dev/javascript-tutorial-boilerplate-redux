import React from 'react';
import Link from './Link';

export default class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.props;

    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { filter, children, store } = this.props;
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
