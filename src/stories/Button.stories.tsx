import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from '../components/src/components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
    backgroundColor: {control: 'color'}
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'white',
  backgroundColor: '#3333AA',
  children: <p>Batata</p>,
};
