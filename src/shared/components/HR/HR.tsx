import React from 'react';

import { cx } from 'shared/utils';

import styles from './styles.module.scss';

export const HR = ({ className, ...rest }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>) => {
  return <hr className={cx(styles.container, className)} {...rest} />;
};
