import React from "react";
import renderer from "react-test-renderer";

import Dashboard from "./Dashboard";

describe("<Dashboard />", () => {
  it("should match snapshot", () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("<Dashboard />", () => {
  it("should add nums", () => {
    expect(addNums(2, 4)).toBe(6);
  });
});
