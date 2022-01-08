import React from 'react';
import { render, screen } from '@testing-library/react';
import {apiUrl, mockApiServer} from "../../test/helpers";
import {rest} from "msw";
import userEvent from "@testing-library/user-event";
// components
import {BbcHome} from './BbcHome';
// Mock data & constants
import {listOfSearchResult} from "../../test/mockData/dataSearch";
import {app} from "../../services/contants/textContent";

describe("<BbcHome/>", () => {
  mockApiServer([
    rest.get(`${apiUrl}/api/v3/trips`, (req, res, ctx) => {
      return res(ctx.json(listOfSearchResult))
    }),
  ])

  it('renders BbcHome component and interact with it', async () => {
    render(<BbcHome />);
    // Take arbitrary trip from search and check that it's well rendered
    const tripLink = await screen.findByText(listOfSearchResult.trips[2].link)
    expect(tripLink).toBeVisible()

    // Check the more button is display
    const moreButton = screen.getByText(app.show_more)
    expect(moreButton).toBeVisible()

    userEvent.click(moreButton)
    // Check the button turn into loading state
    expect(screen.getByText(app.loading)).toBeVisible()
    // Check the button comes back to its normal state
    expect(await screen.findByText(app.show_more)).toBeVisible()
    // We expect to see 2 time the same item as the mock data return the same result
    const tripLinks = await screen.findAllByText(listOfSearchResult.trips[2].link)
    expect(tripLinks.length).toEqual(2)
  });
})

