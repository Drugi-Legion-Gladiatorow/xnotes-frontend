import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ExampleBox, ExampleBoxProps } from './ExampleBox';

export default {
  title: 'Example/Box',
  component: ExampleBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ExampleBoxProps> = (args) => <ExampleBox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text:
    'So this is text that use global styles from index.module.scss (check font and box-sizing in dev tools)',
};
