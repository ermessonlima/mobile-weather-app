import React from 'react'

import { LoadingRequest } from '@components/Loading/LoadingRequest'
import { View } from 'react-native'

export default {
  title: 'Loading',
  component: LoadingRequest,
  decorators: [
    (Story) => (
      <View >
        <Story />
      </View>
    )
  ]
}

export const Basic = {}
