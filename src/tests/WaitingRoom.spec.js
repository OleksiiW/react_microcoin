import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import WaitingRoom from '../components/User/WaitingRoom';


describe('WaitingRoom', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<WaitingRoom />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('renders without error', () => {
    expect(wrapper.exists()).to.be.true;
  });

  it('initializes countdown correctly', () => {
    const countdown = wrapper.find('#timer').text();
    expect(countdown).to.equal('03:00');
  });

  it('updates countdown every second', (done) => {
    setTimeout(() => {
      const updatedCountdown = wrapper.find('#timer').text();
      expect(updatedCountdown).to.equal('02:59');
      done();
    }, 1000);
  });

});
