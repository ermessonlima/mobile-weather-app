import * as React from 'react'

import Weather from '@components/Weather/Weather'
import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components/native'

import theme from '../../../theme'

jest.mock('@assets/icons/icon', () => {
  return {
    Icon: ({ icon }: any) => {
      return <>{icon}</>
    }
  }
})

describe('Weather component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
        <ThemeProvider theme={theme}>
          <Weather />
        </ThemeProvider>
    )

    expect(getByText('Precipitations')).toBeTruthy()
  })

  it('has not Axios Error', () => {
    const { queryByText } = render(
        <ThemeProvider theme={theme}>
          <Weather />
        </ThemeProvider>
    )
    expect(queryByText('Max.: º  Min.: º')).toBeUndefined()
  })
})
