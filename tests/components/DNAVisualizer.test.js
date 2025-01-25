import React from "react";
import { render } from "@testing-library/react";
import DNAVisualizer from "../../src/components/DNAVisualizer";

test("renders DNA visualizer", () => {
    const { getByText } = render(<DNAVisualizer />);
    expect(getByText(/DNA Visualizer/i)).toBeInTheDocument();
});
