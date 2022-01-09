import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
// Components
import {BbcError} from "./BbcError";
// Mock data & constants
import {error} from "../../services/contants/errorContent";

describe("<BbcError/>", () => {
  it('renders BbcError component and interact with it', async () => {
    const onComfirm = jest.fn()
    render(<BbcError text={error['400']} onConfirm={onComfirm} />);

    // Check text is display
    expect(screen.getByText(error['400'])).toBeVisible()

    // Check button is correctly interacting
    const buttonConfirm = screen.getByText(error.close)
    expect(buttonConfirm).toBeVisible()
    userEvent.click(buttonConfirm)

    expect(onComfirm).toHaveBeenCalledTimes(1)
  });
})

