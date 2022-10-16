import { expect, it } from "vitest";
import { buildRandomizer } from "../randomizer";

it("should always return unique message", () => {
  const randomizer = buildRandomizer();
  const messages = Array.from({ length: 5 }, () =>
    randomizer.getRandomMessage()
  );
  const uniqueMessages = new Set(messages);

  expect(messages.length).toBe(5);
  expect(uniqueMessages.size).toBe(messages.length);
});
