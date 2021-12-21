import { joinClasses } from "../strings";

describe("String utilities", () => {
  describe("joinClasses helper", () => {
    it("joins array of strings", () => {
      expect(
        joinClasses(["test-string-1", "test-string-2", "test-string-3"])
      ).toEqual("test-string-1 test-string-2 test-string-3");
    });

    it("filters out non-string values", () => {
      const someInvalidTestValues = [
        "test-string-1",
        undefined,
        "test-string-2",
        null,
        "test-string-3",
        {},
        "test-string-4",
        [],
        "test-string-5",
        true,
        "test-string-6",
        false,
      ];

      // @ts-ignore
      // We wan't to ensure invalid values are passed in - Only strings allowed
      expect(joinClasses(someInvalidTestValues)).toEqual(
        "test-string-1 test-string-2 test-string-3 test-string-4 test-string-5 test-string-6"
      );
    });

    it("returns undefined when no valid values are passed", () => {
      const invalidTestValues = [true, false, [], {}, undefined, null];

      // @ts-ignore
      // Ensure array enitrely of invalid values returns empty string
      expect(joinClasses(invalidTestValues)).toBe("");
    });
  });
});
