import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

test('renders learn react link', () => {
  render(
    <Carousel
      onChange={() => {
        console.log();
      }}
      selectedIndex={2}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </Carousel>,
  );
  const linkElement = screen.getByText(/2/i);
  expect(linkElement).toBeInTheDocument();
});
