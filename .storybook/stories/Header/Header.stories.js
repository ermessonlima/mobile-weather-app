import React from 'react';
import { View } from 'react-native';
import Header from '@components/Header/Header'
import { userEvent, within } from '@storybook/testing-library';
import { useHomeController } from '../../../src/screen/HomeScreen/HomeScreen.controller'

export default  {

  
  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor:'red'}}>
        <Story />
      </View>
    ),
  ],
};

export const PressHeader={
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const header= await canvas.getByTestId('header')
    console.log(header)
    await userEvent.press(header)
  }
}

export const Basic = {
  
  render: function Render(args) {
    const {onOpen}=useHomeController()

    return <Header {...args} onOpen={onOpen}  />;
  },
};



