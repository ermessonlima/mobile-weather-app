import React from 'react'

import Weather from '@components/Weather/Weather'
import { View } from 'react-native'

export default {
  title: 'Weather',
  component: Weather,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: 'red' }}>
        <Story />
      </View>
    )
  ]
}

export const Basic = {}
