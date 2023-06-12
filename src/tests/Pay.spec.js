import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import Pay from '../components/User/Pay';


describe('Pay', () => {
  let wrapper;

  before(() => {
    const dom = new JSDOM('<!doctype html><html><body></body></html>');
    global.window = dom.window;
    global.document = dom.window.document;
  });

  beforeEach(() => {
    wrapper = mount(<Pay />);
  });

  it('renders the Micro Coin header', () => {
    expect(wrapper.find('h1').text()).to.equal('Micro Coin');
  });

  it('renders the recipient information', () => {
    expect(wrapper.find('p').at(0).text()).to.equal('Recipient: Strotskyi Oleksii Olegovich');
    expect(wrapper.find('p').at(1).text()).to.equal('IBAN: UA 27320010000026201330845513');
    expect(wrapper.find('p').at(2).text()).to.equal('ІПН/ЄДРПОУ: 3807706298');
  });

  it('renders the note', () => {
    const note = wrapper.find('div').last().find('p');
    expect(note.text()).to.include('In case of questions, we recommend looking at our');
  });

  it('renders the FAQ link', () => {
    const link = wrapper.find('a');
    expect(link.prop('href')).to.equal('/faq');
    expect(link.text()).to.equal('FAQ');
  });

  it('renders the email link', () => {
    expect(wrapper.text()).to.include('admin.micro.coin@gmail.com');
  });
});