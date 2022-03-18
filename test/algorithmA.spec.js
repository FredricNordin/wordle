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

  test("a + a should be correct", () => {
    const output = algorithmA("a", "a");

    expect(output[0].result).toEqual("correct");
  });

  test("a + b should be incorrect", () => {
    const output = algorithmA("a", "b");

    expect(output[0].result).toEqual("incorrect");
  });

  test("a + A should be correct", () => {
    const output = algorithmA("a", "A");

    expect(output[0].result).toEqual("correct");
  });

  test("aB + AB should be correct", () => {
    const output = algorithmA("ab", "AB");

    expect(output[0].result).toEqual("correct");
    expect(output[1].result).toEqual("correct");
  });

  test("bA + Ab should be misplaced/misplaced", () => {
    const output = algorithmA("bA", "Ab");

    expect(output[0].result).toEqual("misplaced");
    expect(output[1].result).toEqual("misplaced");
  });

  test("check if all is correct", () => {
    const output = algorithmA("llooll", "llooll");

    expect(output[0].result).toEqual("correct");
    expect(output[1].result).toEqual("correct");
    expect(output[2].result).toEqual("correct");
    expect(output[3].result).toEqual("correct");
    expect(output[4].result).toEqual("correct");
    expect(output[5].result).toEqual("correct");
  });

  test("check if all is incorrect", () => {
    const output = algorithmA("llooll", "knarka");

    expect(output[0].result).toEqual("incorrect");
    expect(output[1].result).toEqual("incorrect");
    expect(output[2].result).toEqual("incorrect");
    expect(output[3].result).toEqual("incorrect");
    expect(output[4].result).toEqual("incorrect");
    expect(output[5].result).toEqual("incorrect");
  });

  test("check if all is misplaced", () => {
    const output = algorithmA("akms", "mask");

    expect(output[0].result).toEqual("misplaced");
    expect(output[1].result).toEqual("misplaced");
    expect(output[2].result).toEqual("misplaced");
    expect(output[3].result).toEqual("misplaced");
  });
});
