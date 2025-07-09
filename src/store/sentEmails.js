const sentSet = new Set();

module.exports = {
  has: (key) => sentSet.has(key),
  add: (key) => sentSet.add(key),
};