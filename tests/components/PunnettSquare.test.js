import React from "react";
import { render } from "@testing-library/react";
import PunnettSquare from "../../src/components/PunnettSquare";

test("renders Punnett square", () => {
    const { getByText } = render(<PunnettSquare />);
    expect(getByText(/Punnett Square/i)).toBeInTheDocument();
});
