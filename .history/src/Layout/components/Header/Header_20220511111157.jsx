//import lib
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import css

import style from './Header.module.scss';
//import img
import images from '~/assets/images';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(style);
export default function Header() {
  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <img src={images.logo} alt="TikTok" />
          <div className={cx('search')}>
            <input type="text" placeholder="search account and video" />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')}></FontAwesomeIcon>
          </div>
          {/* search */}
        </div>
      </header>
    </>
  );
}
