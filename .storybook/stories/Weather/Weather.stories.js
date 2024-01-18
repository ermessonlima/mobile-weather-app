import React from 'react';
import { View } from 'react-native';
import Weather from '@components/Weather/Weather'

export default  {
  title: 'Weather',
  component: Weather,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor:'red'}}>
        <Story />
      </View>
    ),
  ],
};

const Template = args => <Weather {...args} />

export const Basic = Template.bind({})