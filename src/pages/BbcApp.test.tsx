import React from 'react';
import { render, screen } from '@testing-library/react';
import BbcApp from './BbcApp';
import {app} from "../services/contants/textContent";

test('renders Blablacar app', () => {
  render(<BbcApp />);
  const title = screen.getByText(app.title);
  expect(title).toBeVisible();
});
