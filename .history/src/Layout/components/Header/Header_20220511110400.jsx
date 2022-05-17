//import lib
import React from 'react';
import classNames from 'classnames/bind';
// import css
import style from './Header.module.scss';
//import img
import images from '~/assets/images';
const cx = classNames.bind(style);
export default function Header() {
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <img src={images.logo} alt="" />
          {/* search */}
        </div>
      </header>
    </>
  );
}
