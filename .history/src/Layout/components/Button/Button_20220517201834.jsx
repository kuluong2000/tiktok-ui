import React from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export default function Button({ to, href, onClick, children }) {
  let Comp = 'button';

  return <Comp>{children}</Comp>;
}
