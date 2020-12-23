import React from 'react';
import { shallow } from 'enzyme';
import User from './singlePerson';


describe('Testing <User/>',()=>{
    it('rendered corectli',()=>{
        const sitebar =shallow(<User/>);
        expect(sitebar).toMatchSnapshot();
    })
})