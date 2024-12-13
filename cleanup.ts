import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// @NOTE: https://testing-library.com/docs/react-testing-library/setup#auto-cleanup-in-vitest

afterEach(() => {
  cleanup();
});
