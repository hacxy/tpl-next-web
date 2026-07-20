import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { cn, formatDate, debounce } from "@/lib/utils";

describe("cn", () => {
  it("should join class names", () => {
    expect(cn("foo", "bar")).toBe("foo bar");
  });

  it("should filter falsy values", () => {
    expect(cn("foo", null, undefined, false, "bar")).toBe("foo bar");
  });

  it("should return empty string for no args", () => {
    expect(cn()).toBe("");
  });

  it("should handle single class", () => {
    expect(cn("foo")).toBe("foo");
  });
});

describe("formatDate", () => {
  it("should format date in Chinese", () => {
    const date = new Date("2024-01-15");
    const formatted = formatDate(date);
    expect(formatted).toContain("2024");
    expect(formatted).toContain("1月");
    expect(formatted).toContain("15");
  });
});

describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should delay function execution", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 100);

    debouncedFn();
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(100);
    expect(fn).toHaveBeenCalledOnce();
  });

  it("should reset timer on subsequent calls", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 100);

    debouncedFn();
    vi.advanceTimersByTime(50);
    debouncedFn();
    vi.advanceTimersByTime(50);
    expect(fn).not.toHaveBeenCalled();

    vi.advanceTimersByTime(50);
    expect(fn).toHaveBeenCalledOnce();
  });

  it("should pass arguments to the function", () => {
    const fn = vi.fn();
    const debouncedFn = debounce(fn, 100);

    debouncedFn("arg1", "arg2");
    vi.advanceTimersByTime(100);

    expect(fn).toHaveBeenCalledWith("arg1", "arg2");
  });
});
