import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  
 
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const MyButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
MyButton.args = {
  label: 'My Button',
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: 'Click me Button',
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  size: 'large',
  label: 'Button',
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  size: 'small',
  label: 'Button',
};
