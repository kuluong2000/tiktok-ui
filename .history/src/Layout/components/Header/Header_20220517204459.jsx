//import lib
import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
// import css

import style from './Header.module.scss';
//import img
import images from '~/assets/images';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as WrapperPopper } from '~/Layout/Popper';
import AccountItem from '~/Layout/AcountItem/AccountItem';
import Button from '../Button/Button';
const cx = classNames.bind(style);
export default function Header() {
  const [searchResult, setSearchResult] = useState([]);
  // useEffect(() => {
  //   setSearchResult([1, 2, 3, 4]);
  // }, []);

  return (
    <>
      <header className={cx('wrapper')}>
        <div className={cx('inner')}>
          <div className={cx('logo')}>
            <img src={images.logo} alt="TikTok" />
          </div>
          <Tippy
            interactive
            visible={searchResult.length > 0}
            render={(attrs) => (
              <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                <WrapperPopper>
                  <h4 className={cx('search-title')}>Account</h4>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                  <AccountItem></AccountItem>
                </WrapperPopper>
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
          <div className={cx('actions')}>
            <Button text>UpLoad</Button>
            <Button outline large>
              Log In
            </Button>
          </div>
          {/* search */}
        </div>
      </header>
    </>
  );
}
