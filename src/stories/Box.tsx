import React from 'react';
import { XnotesLogo } from '../assets';
import styles from './Box.module.scss';

export interface BoxProps {
  text: string;
  backgroundColor?: string;
}

export const Box: React.FC<BoxProps> = ({ text, backgroundColor, ...props }) => {
  return (
    <p className={styles.box} {...props} style={{ backgroundColor }}>
      <XnotesLogo />
      <br />
      {text}
    </p>
  );
};
