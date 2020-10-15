// eslint-disable-next-line
import React, { FC } from 'react';
import HomeTemplate from '../components/templates/HomeTemplate';
import { Title } from '../components/atoms/Title/Title';
import { Subtitle } from '../components/atoms/Subtitle/Subtitle';
import { ButtonWithIcon } from '../components/atoms/ButtonWithIcon/ButtonWithIcon';
import style from './Home.module.scss';
import { Human, XnotesLogo } from '../assets';

const Home: FC = () => {
  return (
    <HomeTemplate>
      <XnotesLogo className={style.logo} title="XnotesLogo" />
      <main className={style.main}>
        <Title>Your best notes application!</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Subtitle>
        <form action="http://localhost:5001" method="POST">
          <ButtonWithIcon
            // eslint-disable-next-line
            //@ts-ignore
            // eslint-disable-next-line
            onClick={() => {
              window.location.href = '/auth';
            }}
            type="submit"
            icon="github"
            black
          >
            Login with Github
          </ButtonWithIcon>
        </form>
      </main>
      <Human title="Human" className={style.human} />
    </HomeTemplate>
  );
};

export default Home;
