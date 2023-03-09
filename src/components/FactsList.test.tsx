import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import FactsList from "./FactsList";

describe("FactsList component", () => {
  it("renders error message if fetch fails", async () => {
    jest.spyOn(global, "fetch").mockRejectedValueOnce();
    render(<FactsList />);
    await waitFor(() => expect(screen.getByText("Error")).toBeInTheDocument());
  });

  it("renders cat fact list if fetch succeeds", async () => {
    const mockData = { data: [{ fact: "Cats are awesome" }] };
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });
    render(<FactsList />);
    await waitFor(() =>
      expect(screen.getByText("Cats are awesome")).toBeInTheDocument()
    );
  });
});
