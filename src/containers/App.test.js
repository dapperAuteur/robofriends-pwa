import { shallow } from 'enzyme';
import './../setupTests';
import React from 'react';
import App from './App';

it('expect to render App component', () => {
  const mockStore = {};
  expect(shallow(<App store = { mockStore } />)).toMatchSnapshot();
});