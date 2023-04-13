import {
  describe,
  it,
  expect
} from "@jest/globals";

import { foo } from "./foo";

describe(
  "foo tests", () => {
    it("should match variable name and value", () => {
      expect(foo).toBe("foo");
    });
  }
);
