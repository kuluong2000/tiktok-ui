// import lib

import React from 'react';
import classNames from 'classnames/bind';

//import componets
import Header from '~/Layout/components/Header/Header';
import Sidebar from './Sidebar/Sidebar';
//import style css
import style from './DefaultLayout.module.scss';

//---------------------------

const cx = classNames.bind(style);

export default function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}
