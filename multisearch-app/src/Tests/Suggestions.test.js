import React from 'react';
import ReactDOM from 'react-dom';
import Suggestions from '../JS/Suggestions';
import { shallow, mount, render } from 'enzyme';

describe('Suggestions component', function(){
  let formattedresults = [1,2,3];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Suggestions />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('receives props', function(){
    const wrapper = shallow(<Suggestions/>);
    wrapper.props.results = formattedresults;
    expect(wrapper.props.results).toEqual([1,2,3]);
  });
});