import React from 'react';
import styles from './RadioButton.module.scss';

type RadioButtonType = 'radio';

export interface RadioButtonProps {
  name?: string;
  type: RadioButtonType;
  value?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ name, type, value, ...props }) => {
  return (
    <label className={styles.radioButtonContainer}>
      <span className={styles.radioButton}>
        <input type={type} name={name} value={value} {...props} />
        <span className={styles.radioDesign} />
      </span>
    </label>
  );
};
