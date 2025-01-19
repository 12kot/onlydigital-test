import React, { ReactNode } from 'react';

import { cx } from 'shared/utils';

import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode;
}

export const H1: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <h1 className={cx(styles.h1, className)} {...rest}>
      {children}
    </h1>
  );
};

export const B: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <b className={cx(styles.b, className)} {...rest}>
      {children}
    </b>
  );
};

export const P: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <p className={cx(styles.p, className)} {...rest}>
      {children}
    </p>
  );
};

export const Span: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <span className={cx(styles.span, className)} {...rest}>
      {children}
    </span>
  );
};
