export default class GNTrieNode {
  constructor(key) {
    this.key = key;
    this.values = new Set();
    this.keys = {};
    this.isEnding = false;
  }
}
