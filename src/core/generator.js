import { buildRandomizer } from "./randomizer";
import { messages, emojis } from "./messages";
/**
 * Setup generator function that takes some config and adds logic to generate message
 *
 * @param {object} config Configuration for generator
 * @param {string} config.generateButtonSelector Selector for generate new message button
 * @param {string} config.generateEmojiButtonSelector Selector for generate new emoji button
 * @param {string} config.copyButtonSelector Selector for copy button
 * @param {string} config.resultContainer Selector for container where we put our result message
 * @param {string} config.resultEmojiContainer Selector for container where we put our result message
 */
function setupGenerator(config) {
  const generateButton = document.querySelector(config.generateButtonSelector);
  const generateEmojiButton = document.querySelector(config.generateEmojiButtonSelector);
  const copyButton = document.querySelector(config.copyButtonSelector);
  const output = document.querySelector(config.resultContainer);
  const emojiOutput = document.querySelector(config.resultEmojiContainer);
  const randomizer = buildRandomizer(messages);
  let index = 0;
  function generateNewMessage() {
    copyButton.classList.remove("btn-copied");
    const { newMessage } = randomizer.getRandomMessage();
    output.innerText = newMessage;
  }
  function generateNewEmoji() {
    copyButton.classList.remove("btn-copied");
    console.log(index);
    emojiOutput.innerHTML = emojis[index];
    if (index >= emojis.length - 1) index = 0;
    else ++index;
  }

  function copyMessageToClipboard() {
    copyButton.classList.add("btn-copied");
    navigator.clipboard.writeText(output.textContent);
  }

  // Subscribe to click events
  generateButton.addEventListener("click", generateNewMessage);
  generateEmojiButton.addEventListener("click", generateNewEmoji);
  copyButton.addEventListener("click", copyMessageToClipboard);

  // Just to generate the first message
  generateNewMessage();
}

export { setupGenerator };
