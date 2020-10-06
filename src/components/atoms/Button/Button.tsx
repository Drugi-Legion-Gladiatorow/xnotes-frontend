import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export interface ButtonProps {
  children: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, disabled = false }) => {
  const buttonClass = disabled ? styles['button--disabled'] : styles.button;

  return (
    <button type="button" className={buttonClass}>
      {children}
    </button>
  );
};
