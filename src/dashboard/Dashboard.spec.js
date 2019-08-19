import React from "react";
import { render, queryAllByText } from "react-testing-library";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should match snapshot", () => {});

  it("should show controls and display", () => {
    const { getByText } = render(<Dashboard />);
    getByText(/unlocked/i);
    getByText(/open/i);
    getByText(/lock gate/i);
    getByText(/close gate/i);
  });
});
