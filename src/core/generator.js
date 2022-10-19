import { buildRandomizer } from "./randomizer";
import { messages } from "./messages";
import { emojis } from "./emojis";
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
  const randomizer = buildRandomizer(messages,emojis);

  function generateNewEmoji() {
    copyButton.classList.remove("btn-copied");
    const { newEmoji } = randomizer.getRandomEmoji();
    emojiOutput.innerHTML =  newEmoji;
  }

  function generateNewMessage() {
    copyButton.classList.remove("btn-copied");
    generateNewEmoji();
    const { newMessage } = randomizer.getRandomMessage();
    output.innerText = newMessage;
  }

  function copyMessageToClipboard() {
    copyButton.classList.add("btn-copied");
    navigator.clipboard.writeText(`${output.textContent} ${emojiOutput.textContent}`);
  }

  // Subscribe to click events
  generateButton.addEventListener("click", generateNewMessage);
  generateEmojiButton.addEventListener("click", generateNewEmoji);
  copyButton.addEventListener("click", copyMessageToClipboard);

  // Just to generate the first message
  generateNewMessage();
}

export { setupGenerator };
