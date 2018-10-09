import { shallow } from 'enzyme';
import React from 'react';
import App from './CounterButton';

it('expect to render App component', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});