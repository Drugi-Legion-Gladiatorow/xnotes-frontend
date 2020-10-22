// eslint-disable-next-line
import React, { FC } from 'react';
import { GithubAvatar } from '../../atoms/GithubAvatar/GithubAvatar';

import styles from './GithubUserData.module.scss';

export interface GithubUserDataProps {
  ghUserName: string;
}

export const GithubUserData: FC<GithubUserDataProps> = ({ ghUserName, ...props }) => {
  return (
    <div className={styles.ghUserDataContainer} {...props}>
      <GithubAvatar />
      <p className={styles.ghUserName}>{ghUserName}</p>
    </div>
  );
};
