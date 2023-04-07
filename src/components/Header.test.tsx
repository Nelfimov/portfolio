import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('it renders', () => {
    render(<Header />);
    const logo = screen.getByText('LOGO');
    expect(logo).toBeInTheDocument();
  });
});
