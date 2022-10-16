function buildRandomizer(messages) {
  const state = {
    messages: [...messages],
    messagesState: messages.slice(1),
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
      state.currentMessage = newMessage;
      return { newMessage, newMessagesState };
    },
  };
}

export { buildRandomizer };
