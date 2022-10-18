import { expect, it } from "vitest";
import { messages } from "../messages";

it("should have unique messages regardless of the emojis", () => {
  const regex = /([a-zA-Z0-9 ])/g;

  const uniqueMessages = messages.map((message) =>
    message.match(regex).join("")
  );
  expect(uniqueMessages).toEqual([...new Set(uniqueMessages)]);

  uniqueMessages.forEach((message) => {
    if (message.toUpperCase() === message)
      expect(uniqueMessages).not.toContain(message);
  });
});

it("should never contain the message LGTM", () => {
  const lgtmMessages = messages.filter(
    (message) => message.toLowerCase() === "lgtm"
  );
  expect(lgtmMessages).toEqual([]);
});
