// eslint-disable-next-line
import React from 'react';
import { Icon } from '@iconify/react';
import styles from './InputSearch.module.scss';
import icons from '../../../theme/icons';

type InputSearchType = 'text';

export interface InputSearchProps {
  placeholder?: string;
  ref?: HTMLInputElement;
  type: InputSearchType;
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputSearch: React.FC<InputSearchProps> = ({
  placeholder,
  ref,
  type,
  handleOnChange,
  ...props
}) => {
  return (
    <div className={styles.inputSearchContainer}>
      <input
        className={styles.inputSearch}
        type={type}
        onChange={handleOnChange}
        placeholder={placeholder}
        {...props}
      />
      <Icon icon={icons.search} className={styles.icon} />
    </div>
  );
};
