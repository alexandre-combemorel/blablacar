import React from 'react';
import { render, screen } from '@testing-library/react';
// Components
import {BbcShowMore} from './BbcShowMore';
// Mock data & constants
import userEvent from "@testing-library/user-event";
import {app} from "../../../../services/contants/textContent";

describe("<BbcHome/>", () => {
  it('renders BbcShowMore component and interact with it', async () => {
    const clickFunction = jest.fn();
    render(<BbcShowMore onShowMoreClick={clickFunction} isLoading={false} />);

    const button = screen.getByText(app.show_more)
    userEvent.click(button)

    expect(clickFunction).toHaveBeenCalledTimes(1)
  });

  it('renders BbcShowMore component loading', async () => {
    render(<BbcShowMore onShowMoreClick={jest.fn()} isLoading={true} />);
    expect(screen.getByText(app.loading)).toBeVisible()
    expect(screen.queryByText(app.show_more)).toBeNull()
  });
})
