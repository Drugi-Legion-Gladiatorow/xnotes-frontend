// eslint-disable-next-line
import React, { FC } from 'react';
// import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, disabled = false }) => {
  const buttonClass = disabled ? styles['button--disabled'] : styles.button;

  return (
    <button type="button" className={buttonClass}>
      {children}
    </button>
  );
};
