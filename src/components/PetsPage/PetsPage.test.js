import React from 'react';
import { shallow } from 'enzyme';
import PetsPage from './PetsPage';

describe('<PetsPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<PetsPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
