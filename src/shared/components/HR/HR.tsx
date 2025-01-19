import React from 'react';

import { cx } from 'shared/utils';

import styles from './styles.module.scss';

export const HR: React.FC<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHRElement>, HTMLHRElement>> = ({ className, ...rest }) => {
  return <hr className={cx(styles.container, className)} {...rest} />;
};
