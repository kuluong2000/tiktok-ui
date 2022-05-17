//import lib
import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
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
            <img src={images.logo} alt="TikTok" />
          </div>
          <Tippy
            render={(attrs) => (
              <div className="box" tabIndex="-1" {...attrs}>
                My tippy box
              </div>
            )}
          >
            <div className={cx('search')}>
              <input type="text" placeholder="search account and video" spellCheck={false} />
              <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
              </button>
              <FontAwesomeIcon icon={faSpinner} className={cx('loading')}></FontAwesomeIcon>
              <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
              </button>
            </div>
          </Tippy>
          <div className={cx('actions')}></div>
          {/* search */}
        </div>
      </header>
    </>
  );
}
