import React from "react";
import { render, queryAllByText } from "@testing-library/react";
import Display from "./Display";

describe("<Display />", () => {
  it("displays gate is locked when locked", () => {
    const display = render(<Display locked={false} closed={false} />);
    expect(display.getByText("Unlocked"));
    expect(display.getByText("Open"));
  });
});
