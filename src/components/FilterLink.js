import React from 'react';
import Link from './Link';

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
