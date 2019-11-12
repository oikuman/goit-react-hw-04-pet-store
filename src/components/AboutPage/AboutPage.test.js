import React from 'react';
import { shallow } from 'enzyme';
import AboutPage from './AboutPage';

describe('<AboutPage />', () => {
  test('renders', () => {
    const wrapper = shallow(<AboutPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
