// eslint-disable-next-line
import React, { FC } from 'react';
import PropsChildren from '../../../global.d';
import style from './HomeTemplate.module.scss';

const Template: FC<PropsChildren> = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Template;
