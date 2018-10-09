import { shallow } from 'enzyme';
import './../setupTests';
import React from 'react';
import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
  const mockProps = {
    // jest.fn() is just a simple function and communicates that to the test suite
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
});

it('filters robots correctly', () => {
  const mockProps2 = {
    // jest.fn() is just a simple function and communicates that to the test suite
    onRequestRobots: jest.fn(),
    robots: [{
      name: 'john'
    },{
      name: 'earl'
    }],
    searchField: 'j',
    isPending: false
  }
  let wrapper2 = shallow(<MainPage { ...mockProps2 } />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
  expect(wrapper2.instance().filterRobots()).toEqual([{ name: 'john' }]);
});