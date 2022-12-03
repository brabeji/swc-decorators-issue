import { it, expect } from "@jest/globals";
import { TwoCounter } from "./TwoCounter";

it("check checky", () => {
  const instance = new TwoCounter();
  expect(instance.state).toEqual(0);
  instance.add();
  expect(instance.state).toEqual(2);
  instance.sub(); // throws
  expect(instance.state).toEqual(0);
});
