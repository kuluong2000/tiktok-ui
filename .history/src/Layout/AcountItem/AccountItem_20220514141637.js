import React from 'react';
import classNames from 'classnames/bind';

import styles from './accountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export default function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/9366bed55819a1889d53ff3a508c766b~c5_300x300.webp?x-expires=1652684400&x-signature=WmqPb6n5qFNB7cPLDARsr4AVrlQ%3D"
        alt=""
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>hoaa.hanassii</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
        </h4>
        <span className={cx('username')}>hoaa.hanassii</span>
      </div>
    </div>
  );
}
