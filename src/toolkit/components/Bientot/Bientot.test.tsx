import React from "react";
import { expect, it } from "vitest";
import renderer from 'react-test-renderer';

import Bientot from "./Bientot";

it("renders correctly", () => {
    const result = renderer.create(<Bientot />).toJSON();
    expect(result).toMatchSnapshot();
});
