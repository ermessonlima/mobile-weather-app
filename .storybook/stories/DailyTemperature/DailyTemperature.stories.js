import React from 'react';
import { View } from 'react-native';
import DailyTemperature from '@components/DailyTemperature/DailyTemperature'

export default  {
  title: 'DailyTemperature',
  component: DailyTemperature,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor:'red'}}>
        <Story />
      </View>
    ),
  ],
};

const Template = args => <DailyTemperature {...args} />

export const Basic = Template.bind({})



