function buildRandomizer(messages, emojis) {
  const state = {
    messages,
    messagesState: messages.slice(1),
    emojis,
    emojisState: emojis.slice(1),
  };
  return {
    getRandomMessage() {
      const { messagesState } = state;
      const index = Math.floor(Math.random() * messagesState.length);
      let newMessage;
      let newMessagesState;
      if (messagesState.length !== 0) {
        newMessage = messagesState[index];
        newMessagesState = [
          ...messagesState.slice(0, index),
          ...messagesState.slice(index + 1),
        ];
      } else {
        newMessage = messages[index];
        newMessagesState = [
          ...messages.slice(0, index),
          ...messages.slice(index + 1),
        ];
      }
      state.messagesState = newMessagesState;
      return { newMessage, newMessagesState };
    },
    getRandomEmoji() {
      const { emojisState } = state;
      const index = Math.floor(Math.random() * emojisState.length);
      let newEmoji;
      let newEmojiState;
      if (emojisState.length !== 0) {
        newEmoji = emojisState[index];
        newEmojiState = [
          ...emojisState.slice(0, index),
          ...emojisState.slice(index + 1),
        ];
      } else {
        newEmoji = emojis[index];
        newEmojiState = [...emojis.slice(0, index), ...emojis.slice(index + 1)];
      }
      state.emojisState = newEmojiState;
      return { newEmoji };
    },
  };
}

export { buildRandomizer };
