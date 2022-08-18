import { buildRandomizer } from "./randomizer";

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
  const randomizer = buildRandomizer();

  function generateNewMessage() {
    output.innerText = randomizer.getRandomMessage();
  }

  function copyMessageToClipboard() {
    navigator.clipboard.writeText(output.textContent);
  }

  // Subscribe to click events
  generateButton.addEventListener("click", generateNewMessage);
  copyButton.addEventListener("click", copyMessageToClipboard);

  // Just to generate the first message
  generateNewMessage();
}

export { setupGenerator };
