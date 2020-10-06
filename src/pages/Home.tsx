// eslint-disable-next-line
import React, { FC } from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import { Title } from '../components/atoms/Title/Title';
import { Button } from '../components/atoms/Button/Button';
import style from './Home.module.scss';
import { Human, XnotesLogo } from '../assets';

const Home: FC = () => {
  return (
    <HomeTemplate>
      <XnotesLogo className={style.logo} title="XnotesLogo" />
      <main className={style.main}>
        <Title>Your best notes application!</Title>
        <p className={style.p}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid corrupti
          dignissimos dolorem sapiente nisi rerum laborum ratione veniam eveniet sunt itaque odit ab
        </p>
        <Button>Login with Github</Button>
        <Button>Next</Button>
        <Button disabled>Next</Button>
      </main>
      <Human title="Human" className={style.human} />
    </HomeTemplate>
  );
};

export default Home;
