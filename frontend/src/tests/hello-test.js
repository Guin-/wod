import React from 'react';
import Hello  from '../hello';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';
//import { shallow } from 'enzyme';

describe('a test', () => {
  it('should run', () => {
    expect(1).to.be.a('number');
  });
});

/*
describe('hello', () => {
  it('should render one <Hello /> component', () => {
    expect(shallow(<Hello />).contains(<div className="hello" />)).toBe(true);
  });
});
*/
