import * as React from 'react'

import { LoadingRequest } from '@components/Loading/LoadingRequest'
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

describe('LoadingRequest component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <LoadingRequest />
        </ThemeProvider>
    )

    expect(getByTestId('loading')).toBeTruthy()
  })
})
