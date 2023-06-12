import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';
import MyLoans from '../components/User/MyLoans';


describe('<MyLoans />', () => {
  let wrapper;
  const response = {
    loans: [
      {
        loan_id: 1,
        debt: 200,
        date: '2023-06-12',
      },
    ],
  };
  
  before(() => {
    const dom = new JSDOM('<!doctype html><html><body></body></html>', { url: "http://localhost/" });
    global.window = dom.window;
    global.document = dom.window.document;
    global.localStorage = dom.window.localStorage;
  
    global.localStorage.setItem('jwtToken', 'fakeToken');
    global.localStorage.setItem('userId', 'fakeUserId');
  
    fetchMock.get(`http://127.0.0.1:5000/user/loan/fakeUserId`, response);
  });

  after(() => {
    fetchMock.restore();
    global.localStorage.clear();
    delete global.window;
    delete global.document;
    delete global.localStorage;
  });
  
  beforeEach(() => {
    wrapper = mount(<MyLoans />);
  });

  it('renders without crashing', () => {
    expect(wrapper).to.be.ok;
  });
 
  it('fetches loans from API', () => {
    expect(fetchMock.called()).to.be.true;
  });
  
});