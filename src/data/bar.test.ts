import {
  describe,
  it,
  expect
} from "@jest/globals";

import { bar } from "./bar";

describe(
  "foo tests", () => {
    it("should match variable name and value", () => {
      expect(bar).toBe("bar");
    });
  }
);
