import { buildRandomizer } from "./randomizer";
import { messages } from "./messages";
/**
 * Setup generator function that takes some config and adds logic to generate message
 *
 * @param {object} config Configuration for generator
 * @param {string} config.generateButtonSelector Selector for generate new message button
 * @param {string} config.copyButtonSelector Selector for copy button
 * @param {string} config.resultContainer Selector for container where we put our result message
 */
function setupGenerator(config) {
  const generateButton = document.querySelector(config.generateButtonSelector);
  const copyButton = document.querySelector(config.copyButtonSelector);
  const output = document.querySelector(config.resultContainer);
  const randomizer = buildRandomizer(messages);

  function generateNewMessage() {
    copyButton.classList.remove("btn-copied");
    const { newMessage } = randomizer.getRandomMessage();
    output.innerText = newMessage; // message
  }

  function copyMessageToClipboard() {
    copyButton.classList.add("btn-copied");
    navigator.clipboard.writeText(output.textContent);
  }

  // Subscribe to click events
  generateButton.addEventListener("click", generateNewMessage);
  copyButton.addEventListener("click", copyMessageToClipboard);

  // Just to generate the first message
  generateNewMessage();
}

export { setupGenerator };
