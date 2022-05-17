import React from 'react';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export default function Button({ to, href, onClick, children }) {
  let Comp = 'button';
  const props = {
    onClick,
  };
  const classes = cx('wrapper', {});

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}
