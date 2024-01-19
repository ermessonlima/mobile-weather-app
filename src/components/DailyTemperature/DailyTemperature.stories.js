import React from 'react'

import DailyTemperature from '@components/DailyTemperature/DailyTemperature'
import { View } from 'react-native'

export default {
  title: 'DailyTemperature',
  component: DailyTemperature,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: 'red' }}>
        <Story />
      </View>
    )
  ]
}

export const Basic = {}
