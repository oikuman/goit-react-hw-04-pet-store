import React from 'react';
import { shallow } from 'enzyme';
import PetPage from './PetPage';

describe('<PetPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<PetPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
