// eslint-disable-next-line
import React from 'react';
import styles from './InputRepo.module.scss';

type InputRepoType = 'text';

export interface InputRepoProps {
  placeholder?: string;
  ref?: HTMLInputElement;
  type: InputRepoType;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputRepo: React.FC<InputRepoProps> = ({ placeholder, type, handleOnChange }) => {
  return (
    <div className={styles.inputRepoContainer}>
      <input
        className={styles.inputRepo}
        type={type}
        onChange={handleOnChange}
        placeholder={placeholder}
      />
    </div>
  );
};
