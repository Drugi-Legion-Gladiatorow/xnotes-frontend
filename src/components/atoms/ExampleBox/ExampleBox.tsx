import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExampleBox.module.scss';
import { XnotesLogo } from '../../../assets';

export interface ExampleBoxProps {
  text: string;
  backgroundColor?: string;
}

export const ExampleBox: React.FC<ExampleBoxProps> = ({ text, backgroundColor, ...props }) => {
  return (
    <p className={styles.box} {...props} style={{ backgroundColor }}>
      <XnotesLogo />
      <br />
      {text}
    </p>
  );
};

ExampleBox.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

ExampleBox.defaultProps = {
  backgroundColor: 'var(--white)',
};
