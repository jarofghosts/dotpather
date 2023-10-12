import dotpather from "../index";

describe("hello", () => {
  it("should return true", () => {
    expect(true).toBe(true);
  });
});

describe("dotpather", () => {
  it("should be a function", () => {
    expect(dotpather).not.toBeUndefined();
    expect(typeof dotpather).toBe("function");
  });

  it("should return value at property", () => {
    const lookup = dotpather("check");
    expect(lookup({ check: "woo" })).toBe("woo");

    expect(lookup({ check: { derp: true } })).toStrictEqual({ derp: true });
  });

  it("should find nested values", () => {
    const lookup = dotpather("check.that.attribute");

    expect(lookup({ check: { that: { attribute: 666 } } })).toBe(666);
  });

  it("should return undefined if path not found", () => {
    const lookup = dotpather("invalid.path");

    expect(lookup({ valid: { path: true } })).toBeUndefined();
  });

  it("should return falsey values", () => {
    const lookup = dotpather("falsey.value");

    expect(lookup({ falsey: { value: false } })).toBeFalsy();
    expect(lookup({ falsey: { value: null } })).toBeNull();
  });

  it("should work on arrays too", () => {
    const lookup = dotpather("arr.1");

    expect(lookup({ arr: [44, 22] })).toBe(22);
  });
});