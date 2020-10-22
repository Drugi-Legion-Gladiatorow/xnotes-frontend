// eslint-disable-next-line
import React, { FC } from 'react';
import { Icon } from '@iconify/react';
import icons from '../../../theme/icons';
import styles from './RepoElement.module.scss';

export interface RepoElementProps {
  userName: string;
  repoName: string;
  marked?: boolean;
  icon: string;
}

export const RepoElement: FC<RepoElementProps> = ({
  userName,
  repoName,
  icon,
  marked = false,
  ...props
}) => {
  const repoStyles = marked ? styles['RepoElement--marked'] : styles.RepoElement;
  return (
    <div className={repoStyles} {...props}>
      <Icon icon={icons[icon]} className={styles.icon} />
      <span className={styles.user}>{userName}</span>/
      <span className={styles.repo}>{repoName}</span>
    </div>
  );
};
