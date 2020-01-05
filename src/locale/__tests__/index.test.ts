import { LanguageEngine } from "../index";

describe("The Language Engine", () => {
  beforeAll(() => {
    localStorage.clear();
  });

  it("should begin on english by default", () => {
    const Testable = new LanguageEngine();
    expect(Testable.language).toBe("en");
  });
});
