import { test, expect } from "@jest/globals";
import algorithmA from "../src/index.js";

describe("Tests for the wordle algorithm A assignment", () => {
  test("one letter 'l' should not be misplaced if it has one correct", () => {
    const output = algorithmA("HALLÅ", "CYKLA");

    expect(output[0].result).toEqual("incorrect");
    expect(output[1].result).toEqual("misplaced");
    expect(output[2].result).toEqual("incorrect");
    expect(output[3].result).toEqual("correct");
    expect(output[4].result).toEqual("incorrect");
  });

  test("a + a should be correct because of two same letters", () => {
    const output = algorithmA("a", "a");

    expect(output[0].result).toEqual("correct");
  });

  test("a + b should be incorrect because of two different letters", () => {
    const output = algorithmA("a", "b");

    expect(output[0].result).toEqual("incorrect");
  });

  test("a + A should be correct small and big letters match", () => {
    const output = algorithmA("a", "A");

    expect(output[0].result).toEqual("correct");
  });

  test("aB + AB should be correct/correct small guess letters and big answer letters match", () => {
    const output = algorithmA("ab", "AB");

    expect(output[0].result).toEqual("correct");
    expect(output[1].result).toEqual("correct");
  });

  test("bA + Ab should be misplaced/misplaced mixed small and big letters but misplaced", () => {
    const output = algorithmA("bA", "Ab");

    expect(output[0].result).toEqual("misplaced");
    expect(output[1].result).toEqual("misplaced");
  });

  test("test if all can be correct", () => {
    const output = algorithmA("llooll", "llooll");

    expect(output[0].result).toEqual("correct");
    expect(output[1].result).toEqual("correct");
    expect(output[2].result).toEqual("correct");
    expect(output[3].result).toEqual("correct");
    expect(output[4].result).toEqual("correct");
    expect(output[5].result).toEqual("correct");
  });

  test("test if all can be incorrect", () => {
    const output = algorithmA("llooll", "knarka");

    expect(output[0].result).toEqual("incorrect");
    expect(output[1].result).toEqual("incorrect");
    expect(output[2].result).toEqual("incorrect");
    expect(output[3].result).toEqual("incorrect");
    expect(output[4].result).toEqual("incorrect");
    expect(output[5].result).toEqual("incorrect");
  });

  test("test if all can be misplaced", () => {
    const output = algorithmA("akms", "mask");

    expect(output[0].result).toEqual("misplaced");
    expect(output[1].result).toEqual("misplaced");
    expect(output[2].result).toEqual("misplaced");
    expect(output[3].result).toEqual("misplaced");
  });
});
