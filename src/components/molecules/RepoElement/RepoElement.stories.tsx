import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { RepoElementProps, RepoElement } from './RepoElement';

export default {
  title: 'molecules/RepoElement',
  component: RepoElement,
} as Meta;

const Template: Story<RepoElementProps> = (args) => <RepoElement {...args} />;

export const Default = Template.bind({});
Default.args = {
  userName: 'gladiators',
  repoName: 'super-notes',
  marked: false,
  icon: 'github',
};

export const Marked = Template.bind({});
Marked.args = {
  userName: 'gladiators',
  repoName: 'super-notes',
  marked: true,
  icon: 'github',
};
