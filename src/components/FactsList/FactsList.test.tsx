import { render, waitFor, screen } from "@testing-library/react";
import FactsList from "./FactsList";

describe("FactsList", () => {
  beforeEach(() => {
    // jest.spyOn(global, "fetch").mockImplementation(() =>
    //   Promise.resolve({
    //     json: () =>
    //       Promise.resolve({
    //         data: [
    //           { fact: "Cats are cute" },
    //           { fact: "Cats are smart" },
    //           { fact: "Cats are loyal" },
    //         ],
    //       }),
    //   })
    // );

    global.fetch = jest.fn(async () =>
      Promise.resolve({
        json: async () =>
          Promise.resolve({
            data: [
              { fact: "Cats are cute" },
              { fact: "Cats are smart" },
              { fact: "Cats are loyal" },
            ],
          }),
      })
    ) as jest.Mock;
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render facts list", async () => {
    render(<FactsList />);

    await waitFor(() => {
      expect(screen.getByText("Cats are cute")).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(3);
    });
  });

  it("should handle API errors", async () => {
    jest.spyOn(console, "log").mockImplementation(() => {});
    jest.spyOn(global, "fetch").mockImplementation(() => {
      throw new Error("API is down");
    });

    render(<FactsList />);

    await waitFor(() => {
      expect(screen.getByText("Error")).toBeInTheDocument();
    });
  });
});
