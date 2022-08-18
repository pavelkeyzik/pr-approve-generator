import { messages } from "./messages";

function buildRandomizer() {
  const state = {
    currentMessage: messages[0],
    messagesState: messages.slice(1),
  };

  return {
    getRandomMessage() {
      const { messagesState } = state;
      const index = Math.floor(Math.random() * messagesState.length);

      let newMessage;
      let newMessagesState;

      if (messagesState.length !== 0) {
        newMessage = messagesState.at(index);
        newMessagesState = [
          ...messagesState.slice(0, index),
          ...messagesState.slice(index + 1),
        ];
      } else {
        newMessage = messages.at(index);
        newMessagesState = [
          ...messages.slice(0, index),
          ...messages.slice(index + 1),
        ];
      }

      state.messagesState = newMessagesState;
      state.currentMessage = newMessage;

      return state.currentMessage;
    },
  };
}

export { buildRandomizer };
