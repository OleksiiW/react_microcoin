import React from 'react';
import { mount } from 'enzyme';
import Faq from '../components/User/Faq';
import { JSDOM } from 'jsdom';
import { expect } from 'chai';


const { window } = new JSDOM('<!doctype html><html><body></body></html>');

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

describe('Faq', () => {
  it('renders without crashing', () => {
    const wrapper = mount(<Faq />);
    expect(wrapper.exists()).to.be.true;
  });

  it('renders the FAQ questions', () => {
    const wrapper = mount(<Faq />);
    const questions = wrapper.find('h2');
    expect(questions.length).to.equal(21);
  });

  it('toggles the answer visibility when a question is clicked', () => {
    const wrapper = mount(<Faq />);
    const firstQuestion = wrapper.find('h2').first();
    const answer = wrapper.find('p').first();

    expect(answer.prop('style').display).to.equal('none');
    firstQuestion.simulate('click');
    // In case the 'style' object changes after the click you might want to access the updated wrapper
    const updatedAnswerAfterFirstClick = wrapper.find('p').first();
    expect(updatedAnswerAfterFirstClick.prop('style').display).to.equal('block');
    firstQuestion.simulate('click');
    const updatedAnswerAfterSecondClick = wrapper.find('p').first();
    expect(updatedAnswerAfterSecondClick.prop('style').display).to.equal('none');
  });
});