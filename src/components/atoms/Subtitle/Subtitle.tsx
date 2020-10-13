// eslint-disable-next-line
import React, { FC } from 'react';
import styles from './Subtitle.module.scss';

export interface SubtitleProps {
  children: string;
}

export const Subtitle: FC<SubtitleProps> = ({ children }) => {
  return <p className={styles.subtitle}>{children}</p>;
};
