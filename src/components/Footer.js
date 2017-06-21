import React from 'react';

function Link({ active, children, onClick }) {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <a
      href="#"
      onClick={event => {
        event.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
}

function FilterLink({ filter, children, currentFilter, onClick }) {
  return (
    <Link
      active={filter === currentFilter}
      onClick={() => {
        onClick(filter);
      }}
    >
      {children}
    </Link>
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
