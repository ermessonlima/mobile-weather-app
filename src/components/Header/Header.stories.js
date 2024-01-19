import React from 'react'

import Header from '@components/Header/Header'
import { View } from 'react-native'

import { useHomeController } from '../../../src/screen/HomeScreen/HomeScreen.controller'

export default {

  title: 'Header',
  component: Header,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: 'red' }}>
        <Story />
      </View>
    )
  ]
}

export const Basic = {

  render: function Render (args) {
    const { onOpen } = useHomeController()

    return <Header {...args} onOpen={onOpen} />
  }
}
