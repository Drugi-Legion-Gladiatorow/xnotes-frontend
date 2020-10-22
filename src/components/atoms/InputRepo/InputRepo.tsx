// eslint-disable-next-line
import React from 'react';
import styles from './InputRepo.module.scss';

type InputRepoType = 'text';

export interface InputRepoProps {
  placeholder?: string;
  ref?: HTMLInputElement;
  type: InputRepoType;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export const InputRepo: React.FC<InputRepoProps> = ({
  placeholder,
  ref,
  type,
  handleOnChange,
  error = false,
  ...props
}) => {
  const inputRepoStyle = error ? styles['inputRepo--error'] : styles.inputRepo;
  return (
    <div className={styles.inputRepoContainer}>
      <input
        className={inputRepoStyle}
        type={type}
        onChange={handleOnChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
};
