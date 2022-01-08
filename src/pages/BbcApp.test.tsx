import React from 'react';
import { render, screen } from '@testing-library/react';
import {app} from "../services/contants/textContent";
// Components
import BbcApp from './BbcApp';

test('renders Blablacar app', () => {
  render(<BbcApp />);
  const title = screen.getByText(app.title);
  expect(title).toBeVisible();
});
