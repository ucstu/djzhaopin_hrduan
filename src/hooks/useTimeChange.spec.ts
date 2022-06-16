import { describe, expect, test } from "vitest";
import useTimeChange from "./useTimeChange";

describe("useTimeChange", () => {
  //   test("renders", async () => {
  //     expect(useTimeChange(Math.random() % 999999)).match(/^\d{4}-\d{2}-\d{2}$/);
  //   });
  test("should first", () => {
    expect(useTimeChange(Math.random() % 999999)).match(/[^\\x00-\\xff]/);
  });
});
