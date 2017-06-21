import React from 'react';

function FilterLink({ filter, children, currentFilter, onClick }) {
  if (filter === currentFilter) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        onClick(filter);
      }}
    >
      {children}
    </a>
  );
}

export default function Footer({ visibilityFilter, onFilterClick }) {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter="SHOW_ALL"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        All
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_ACTIVE"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Active
      </FilterLink>
      {' '}
      <FilterLink
        filter="SHOW_COMPLETED"
        currentFilter={visibilityFilter}
        onClick={onFilterClick}
      >
        Completed
      </FilterLink>
    </p>
  );
}
