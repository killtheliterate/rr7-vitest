import { render, screen, waitFor } from "@testing-library/react";
import { test } from "vitest";

import { Echo } from "~/echo";

test("Welcome screen renders ", async () => {
  render(<Echo />);

  await waitFor(() => screen.findByText("ECHO"));
});
