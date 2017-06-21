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

export default function FilterLink({
  filter,
  children,
  currentFilter,
  onClick,
}) {
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
