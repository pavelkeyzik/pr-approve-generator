import { describe, expect, it } from 'vitest';
import { buildRandomizer } from '../randomizer';

describe('Rules for generated messages in randomizer', () => {
  it('should always return unique message', () => {
    const messages = ['1', '2', '3', '4', '5'];
    const emojis = ['1', '2', '3', '4', '5'];
    const randomizer = buildRandomizer(messages, emojis);

    const { newMessage, newMessagesState } = randomizer.getRandomMessage();
    expect(newMessagesState).not.toContain(newMessage);
  });

  it('should return initial array when the array is empty', () => {
    const messages = ['1', '2', '3', '4', '5'];
    const emojis = ['1', '2', '3', '4', '5'];
    const randomizer = buildRandomizer(messages, emojis);

    for (let i = 0; i < messages.length; i += 1) {
      const { newMessagesState } = randomizer.getRandomMessage();
      if (i === messages.length - i) {
        expect(newMessagesState).toEqual(messages);
      }
    }
  });

  it('should return unique emoji when it is triggered', () => {
    const messages = ['1', '2', '3', '4', '5'];
    const emojis = ['1', '2', '3', '4', '5'];
    const randomizer = buildRandomizer(messages, emojis);

    for (let i = 0; i < emojis.length; i += 1) {
      const { newEmojiState } = randomizer.getRandomEmoji();
      if (i === emojis.length - i) {
        expect(newEmojiState).toEqual(emojis);
      }
    }
  });
});
