import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Input, InputProps } from '../components/src/components/Input';

export default {
  title: 'Example/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const InputText = Template.bind({});

InputText.args = {
  name: 'test',
  type: 'text',
  label: 'Meu texto',
};
