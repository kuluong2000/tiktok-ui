//import lib
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import css

import style from './Header.module.scss';
//import img
import images from '~/assets/images';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
export default function Header() {
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            {' '}
            <img src={images.logo} alt="TikTok" />
          </div>
          <div className={cx('search')}>
            <input type="text" placeholder="search account and video" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')}></FontAwesomeIcon>
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </div>
          {/* search */}
        </div>
      </header>
    </>
  );
}
