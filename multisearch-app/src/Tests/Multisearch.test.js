import React from 'react';
import ReactDOM from 'react-dom';
import MultiSearch from '../JS/MultiSearch';
import Suggestions from '../JS/Suggestions';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

describe('MultiSearch component', () =>{

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MultiSearch />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

    it('always renders an input', () =>{
        const wrapper = shallow(<MultiSearch/>);
        const input = wrapper.find('.searchBox');
        expect(input.length).toEqual(1);
    });

    it('contains a Suggestion subcomponent', () => {
        const wrapper = shallow(<MultiSearch/>);
        expect(wrapper.find(Suggestions)).toHaveLength(1);
    });

    // test('Input should call handleSearchChange on change event', () => {

    //     const event = {target: {name: 'username', value: 'usertest'}};
    //     const search = mount(<MultiSearch />);
    //     const input = search.find('.searchBox');
    //     const handleChange = jest.spyOn(search.instance(), 'handleSearchChange');
    //     search.update(); // <--- Needs this to force re-render
        
        
    //     input.simulate('change', event);
        
    //     expect(handleChange).toBeCalled();
      
    // });
});

