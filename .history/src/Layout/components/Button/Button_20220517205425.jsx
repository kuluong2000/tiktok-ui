import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

export default function Button({
  to,
  href,
  primary,
  outline,
  text,
  disabled,
  small,
  large,
  leftIcon,
  rightIcon,
  onClick,
  children,
}) {
  let Comp = 'button';
  const props = {
    onClick,
  };
  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    disabled,
    small,
    large,
  });
  if (to) {
    props.to = to;
    Comp = Link;
  }
  if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <Comp className={classes} {...props}>
      <span> {children}</span>
    </Comp>
  );
}
