import React from 'react';
import Header from '~/Layout/components/Header/Header';
export default function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
