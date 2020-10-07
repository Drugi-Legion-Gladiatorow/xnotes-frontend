import React from 'react';
import PropTypes from 'prop-types';
import styles from './ExampleButton.module.scss';

export interface ExampleButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ExampleButton: React.FC<ExampleButtonProps> = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary
    ? styles['storybook-button--primary']
    : styles['storybook-button--secondary'];
  return (
    <button
      type="button"
      className={[styles['storybook-button'], styles[`storybook-button--${size}`], mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

ExampleButton.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
};

ExampleButton.defaultProps = {
  primary: false,
  backgroundColor: 'medium',
  size: 'small',
};
