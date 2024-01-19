import React from 'react'

import PickerLocation from '@components/Picker/PickerLocation'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '../../theme'

const MyPickerLocation = {
  title: 'MyPickerLocation',
  component: PickerLocation,
  decorators: [
    (Story) => (
      <View style={{ backgroundColor: 'red' }}>
         <ThemeProvider theme={theme}>
        <Story />
        </ThemeProvider>
      </View>
    )
  ]
}

export default MyPickerLocation
export const Basic = {}
