import { shallow } from 'enzyme';
import './../setupTests';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: '',
    isPending: false
  }
  wrapper = shallow(<MainPage { ...mockProps } />);
});

// it('expect to render MainPage component', () => {
//   const mockStore = {};
//   expect(shallow(<MainPage store = { mockStore } />)).toMatchSnapshot();
// });

it('renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
})