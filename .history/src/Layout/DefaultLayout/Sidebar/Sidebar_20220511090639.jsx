//import lib
import React from 'react';
import classNames from 'classnames//bind';

//import css
import style from './Sidebar.module.scss';

const cx = classNames.bind(style);
export default function Sidebar() {
  return (
    <aside className={cx('aside')}>
      <h1>sidebbar</h1>
    </aside>
  );
}
