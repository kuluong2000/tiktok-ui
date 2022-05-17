import React from 'react';
import Header from '~/component/Layout/components/Header/Header';
import Sidebar from './Sidebar/Sidebar';
export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
