import React from 'react';
import PropTypes from 'prop-types';
import styles from './Box.module.scss';
import { XnotesLogo } from '../../../assets';

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

Box.propTypes = {
  text: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
};

Box.defaultProps = {
  backgroundColor: 'var(--white)',
};
