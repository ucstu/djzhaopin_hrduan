import { describe, expect, test } from "vitest";
import useDate from "./useDate";

describe("useDate", () => {
  test("renders", async () => {
    expect(useDate(Math.random() % 999999)).match(/^\d{4}-\d{2}-\d{2}$/);
  });
});
