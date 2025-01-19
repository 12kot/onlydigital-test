import React, { ReactNode } from 'react';

import { cx } from 'shared/utils';

import styles from './styles.module.scss';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode;
}

export const H1 = ({ children, className, ...rest }: Props) => {
  return (
    <h1 className={cx(styles.h1, className)} {...rest}>
      {children}
    </h1>
  );
};

export const B = ({ children, className, ...rest }: Props) => {
  return (
    <b className={cx(styles.b, className)} {...rest}>
      {children}
    </b>
  );
};

export const P = ({ children, className, ...rest }: Props) => {
  return (
    <p className={cx(styles.p, className)} {...rest}>
      {children}
    </p>
  );
};

export const Span = ({ children, className, ...rest }: Props) => {
  return (
    <span className={cx(styles.span, className)} {...rest}>
      {children}
    </span>
  );
};
