import React from 'react';
import {render, screen, within} from '@testing-library/react';
import {apiUrl, mockApiServer} from "../../../../test/helpers";
import {rest} from "msw";
import userEvent from "@testing-library/user-event";
// Components
import {BbcTrip} from "./BbcTrip";
// Mock data & constants
import {listOfSearchResult} from "../../../../test/mockData/dataSearch";
import {dataTrip} from "../../../../test/mockData/dataTrip";
import {app} from "../../../../services/contants/textContent";

const trip = listOfSearchResult.trips[2]

describe("<BbcTrip/>", () => {
  const tripId = new URL(trip.link).searchParams.get('id')
  mockApiServer([
    rest.get(`${apiUrl}/api/v2/trips/${tripId}`, (req, res, ctx) => {
      return res(ctx.json(dataTrip))
    }),
  ])

  it('renders BbcHome component and interact with it', async () => {
    render(<BbcTrip trip={trip} />);

    // Check the see details button is here and click on it
    const buttonSeeDetails = screen.getByText(app.seeDetails)
    expect(buttonSeeDetails).toBeVisible()
    userEvent.click(buttonSeeDetails)

    // Loading state should appear
    expect(screen.getByText(app.loading)).toBeVisible()
    expect(await screen.findByText(`${app.seats}:`)).toBeVisible()
    // The text from seats should be present
    const seatsBlock = screen.getByTitle(app.seats)
    expect(seatsBlock).toBeVisible()
    // Check the value is well displauy inside the block
    const { getByText: getByTextInsideSeatsBlock } = within(seatsBlock)
    expect(getByTextInsideSeatsBlock(dataTrip.seats)).toBeVisible()

    // Make sure the see details button is removed
    expect(buttonSeeDetails).not.toBeInTheDocument()
  });
})

