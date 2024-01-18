import React from 'react';
import { View } from 'react-native';
import {LoadingRequest} from '@components/Loading/LoadingRequest'

export default  {
  title: 'Loading',
  component: LoadingRequest,
};

const Template = args => <LoadingRequest  />

export const Basic = Template.bind({})


