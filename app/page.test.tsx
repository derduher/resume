import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Page from "./page";

describe("Page", () => {
  test("renders the header", () => {
    render(<Page />);
    expect(screen.getByText(/Patrick Weygand/i)).toBeInTheDocument();
  });
});
