import React from 'react';
import { View } from 'react-native';
import Header from '@components/Header/Header'

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

const Template = args => <Header {...args} />

export const Basic = Template.bind({})



