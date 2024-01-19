import * as React from 'react'

import Header from '@components/Header/Header'
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

describe('Header component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
    )

    expect(getByTestId('header')).toBeTruthy()
  })
})
