import React from 'react';
import ReactDOM from 'react-dom';
import GetData from '../JS/GetData';
import { shallow, mount, render } from 'enzyme';

it('returns data in the form of an object', () => {
    const data = {
        bing: {
            relatedSearches: [] 
        },
        duck: {
            RelatedTopics: []
        }
    };

    test('the data is an object containing two more objects', () => {
        expect.assertions(1);
        // return GetData.search().then(data => {
        //     expect(data).toContain();
        // });
        return expect(GetData.search()).resolves.toBe('abc');
    });
});