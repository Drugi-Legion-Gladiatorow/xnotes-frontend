import React from 'react';
import styles from './Subtitle.module.scss';

export interface SubtitleProps {
  children: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>;
};
