import React from 'react';
import classNames from 'classnames/bind';
import styles from './wrapper.modules.scss';
const cx = classNames.bind(styles);
export default function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}
