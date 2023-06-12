import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import Cabinet from '../components/User/Cabinet';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = {
  getItem: sinon.stub(),
  setItem: sinon.stub(),
  removeItem: sinon.stub(),
  clear: sinon.stub(),
};

describe('<Cabinet />', () => {
  let wrapper;
  const fakeUser = {
    login: 'testUser',
    full_name: 'Test User',
    passport_number: '123456',
    card_number: '1234567890',
    date_of_birth: '1990-01-01',
    credit_history: 'Good',
    email: 'test@example.com',
    phone_number: '+123456789',
  };

  beforeEach(() => {
    global.localStorage.getItem.returns('1');
    fetchMock.get(`http://127.0.0.1:5000/user/1`, {
      body: fakeUser,
      status: 200,
    });
    wrapper = mount(<Cabinet />);
  });

  afterEach(() => {
    fetchMock.reset();
    sinon.resetHistory();
  });

  it('renders user data correctly', () => {
    return new Promise((resolve) => {
      setImmediate(() => {
        wrapper.update();
        expect(wrapper.find('p').at(0).text()).to.equal(`Login: ${fakeUser.login}`);
        expect(wrapper.find('p').at(1).text()).to.equal(`Full Name: ${fakeUser.full_name}`);
        expect(wrapper.find('p').at(2).text()).to.equal(`Passport Number: ${fakeUser.passport_number}`);
        expect(wrapper.find('p').at(3).text()).to.equal(`Card Number: ${fakeUser.card_number}`);
        expect(wrapper.find('p').at(4).text()).to.equal(`Date Of Birth: ${fakeUser.date_of_birth}`);
        expect(wrapper.find('p').at(5).text()).to.equal(`Credit History: ${fakeUser.credit_history}`);
        expect(wrapper.find('p').at(6).text()).to.equal(`Email: ${fakeUser.email}`);
        expect(wrapper.find('p').at(7).text()).to.equal(`Phone Number: ${fakeUser.phone_number}`);
        resolve();
      });
    });
  });

});
