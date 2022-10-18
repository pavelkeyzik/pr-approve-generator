import { expect, it } from "vitest";
import { messages } from "../messages";

it("should have unique messages regardless of the emojis", () => {
  const regex = /([a-zA-Z0-9 ])/g;
  const uniqueMessages = messages.map((message) =>
    message.match(regex).join("").toLowerCase()
  );

  expect(uniqueMessages).toEqual([...new Set(uniqueMessages)]);
  expect(uniqueMessages.length).toBe(messages.length);
});

it("should never contain the message LGTM", () => {
  const lgtmMessages = messages.filter(
    (message) => message.toLowerCase() === "lgtm"
  );
  expect(lgtmMessages).toEqual([]);
});
