import { JSDOM } from 'jsdom';
import { expect } from 'chai';
import React from 'react';
import { mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import sinon from 'sinon';
import TakeLoan from '../components/User/TakeLoan';


describe('TakeLoan component', () => {
    let wrapper;

    beforeEach(() => {
        const dom = new JSDOM('<!doctype html><html><body></body></html>');
        global.window = dom.window;
        global.document = dom.window.document;

        global.localStorage = {
            getItem: sinon.stub(),
            setItem: sinon.stub(),
            removeItem: sinon.stub(),
            clear: sinon.stub()
        };

        fetchMock.mock('http://127.0.0.1:5000/loan', 200);

        wrapper = mount(<TakeLoan />);
    });

    afterEach(() => {
        fetchMock.reset();
    });

    it('renders without crashing', () => {
        expect(wrapper).to.be.ok;
    });

    it('updates repaymentAmount input when loanAmount value changes', () => {
        wrapper.find('#loanAmount').simulate('change', { target: { value: 200 }});
        expect(wrapper.find('#repaymentAmount').prop('value')).not.to.equal('130.00'); 
    });
    
    it('updates repaymentAmount input when loanDuration value changes', () => {
        wrapper.find('#loanDuration').simulate('change', { target: { value: 5 }});
        expect(wrapper.find('#repaymentAmount').prop('value')).not.to.equal('130.00'); 
    });

    it('makes a POST request when the button is clicked', () => {
        wrapper.find('button').simulate('click');
        expect(fetchMock.called('http://127.0.0.1:5000/loan')).to.be.true;
    });
});