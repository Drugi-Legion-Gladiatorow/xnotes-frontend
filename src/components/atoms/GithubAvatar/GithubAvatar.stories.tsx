import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { GithubAvatar, GithubAvatarProps } from './GithubAvatar';

export default {
  title: 'atoms/GithubAvatar',
  component: GithubAvatar,
} as Meta;

const Template: Story<GithubAvatarProps> = (args) => <GithubAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithSrc = Template.bind({});
WithSrc.args = {
  avatarSrc: 'https://avatars2.githubusercontent.com/u/69529787?s=200&v=4',
};
