module.exports = function(str) {
  return str
  .replace(/(\'[\s\S]*?\')|(\"[\s\S]*?\")|(\/\*[\s\S]*?\*\/)|(\/\/.*)/g)
  .match(/\{[\s\S]*?\}/) ? str : require('css-whitespace')(str);
};
