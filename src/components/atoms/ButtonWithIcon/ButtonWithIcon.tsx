// eslint-disable-next-line
import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import icons from '../../../theme/icons';
import styles from './ButtonWithIcon.module.scss';

export interface ButtonWithIconProps {
  children?: string;
  icon?: string;
  black?: boolean;
}

export const ButtonWithIcon: FC<ButtonWithIconProps> = ({
  children = '',
  icon = '',
  black = false,
  ...props
}) => {
  const buttonClass = black ? styles['button--black'] : styles.button;

  return (
    <button type="button" className={buttonClass} {...props}>
      {icon && <Icon icon={icons[icon]} className={styles.icon} />}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
