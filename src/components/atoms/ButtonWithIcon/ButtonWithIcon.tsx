import React from 'react';
// import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import icons from '../../../theme/icons';
import styles from './ButtonWithIcon.module.scss';

export interface ButtonWithIconProps {
  children?: string;
  icon?: string;
  black?: boolean;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
  children = '',
  icon = '',
  black = false,
  ...props
}) => {
  const buttonClass = black ? styles['button--black'] : styles.button;

  return (
    <button type="button" className={buttonClass} {...props}>
      {icon && <Icon icon={icons[icon]} className={styles.icon} />}
      {children && <span>{children}</span>}
    </button>
  );
};
