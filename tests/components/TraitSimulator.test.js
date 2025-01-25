import React from "react";
import { render } from "@testing-library/react";
import TraitSimulator from "../../src/components/TraitSimulator";

test("renders trait simulator", () => {
    const { getByText } = render(<TraitSimulator />);
    expect(getByText(/Trait Simulator/i)).toBeInTheDocument();
});
