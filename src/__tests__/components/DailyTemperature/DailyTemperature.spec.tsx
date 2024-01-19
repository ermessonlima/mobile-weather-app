import * as React from 'react'

import DailyTemperature from '@components/DailyTemperature/DailyTemperature'
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

describe('DailyTemperature component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
          <DailyTemperature />
        </ThemeProvider>
    )

    expect(getByTestId('dailyTemperature')).toBeTruthy()
  })

  it('has not Axios Error', async () => {
    const renderer = await render(
      <ThemeProvider theme={theme}>
      <DailyTemperature />
    </ThemeProvider>
    )
    // renderer.debug()
    const temperature = renderer.queryByText('ºC')
    expect(temperature).toBeTruthy()
  })
})
