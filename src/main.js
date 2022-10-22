import setupGenerator from './core/generator';

setupGenerator({
  generateButtonSelector: '#js-generate',
  generateEmojiButtonSelector: '#js-emoji',
  copyButtonSelector: '#js-copy',
  resultContainer: '#js-result',
  resultEmojiContainer: '#js-result-emoji',
});
