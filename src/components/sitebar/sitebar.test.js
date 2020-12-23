import { shallow } from 'enzyme';
import React from 'react';
import Sitebar from './index';


describe('Testing <Sitebar/>',()=>{
    it('rendered corectli',()=>{
        const sitebar =shallow(<Sitebar/>);
        expect(sitebar).toMatchSnapshot();
    })
})
