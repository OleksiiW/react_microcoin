import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders LoginPage at "/login"', () => {
    render(<MemoryRouter initialEntries={['/login']}><App /></MemoryRouter>);
    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });

  it('renders LoginPage when userType is not "user" at "/"', () => {
    Storage.prototype.getItem = jest.fn(() => 'user');
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    expect(screen.getByText(/Cabinet/i)).toBeInTheDocument();
  });

  it('renders Panel and Loans when userType is "admin" at "/panel"', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(() => 'admin');
    render(<MemoryRouter initialEntries={['/panel']}><App /></MemoryRouter>);
    expect(screen.getByText(/Loans and users/i)).toBeInTheDocument();
    expect(screen.getByText(/Change user data/i)).toBeInTheDocument();
    expect(screen.getByText(/Delete a user/i)).toBeInTheDocument();
    expect(screen.getByText(/Pay off a loan/i)).toBeInTheDocument();
    expect(screen.getByText(/Log out/i)).toBeInTheDocument();
    expect(screen.getByText(/Micro Coin - User Debts/i)).toBeInTheDocument();
  });
});
