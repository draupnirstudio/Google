/**
 * GNTrie
 * Trie for autocomplete
 *
 * Kefei Qian(kefei.qian@hotmail.com)
 * Licensed under the MIT License
 *
 * Last Modified: 20191116
 */

import { isString, isEqual } from 'lodash';
import GNTrieNode from './GNTrieNode';

const fetchChildWords = (root, exact) => {
  if (exact) return Array.from(root.values);

  const res = [];

  const keys = Object.keys(root.keys);
  const n = keys.length;

  for (let i = 0; i < n; i += 1) {
    res.push(...fetchChildWords(root.keys[keys[i]], exact));
  }

  if (root.isEnding) {
    res.push(...Array.from(root.values));
  }

  return res;
};

const parseData = (root, key, value) => {
  if (!isString(key) || key.length === 0) return;

  const n = key.length;
  let p = root;

  for (let i = 0; i < n; i += 1) {
    const k = key[i];
    if (!(k in p.keys)) {
      p.keys[k] = new GNTrieNode(k);
    }
    p = p.keys[k];
  }

  p.isEnding = true;
  p.values.add(value);
};

const searchWord = (root, keyword, exact) => {
  const n = keyword.length;
  let p = root;

  for (let i = 0; i < n; i += 1) {
    const c = keyword[i];
    if (c in p.keys) {
      p = p.keys[c];
    } else if (c.toLowerCase() in p.keys) {
      p = p.keys[c.toLowerCase()];
    } else {
      return [];
    }
  }

  return fetchChildWords(p, exact);
};

const removeItem = (root, key, item) => {
  const n = key.length;
  let p = root;

  for (let i = 0; i < n; i += 1) {
    const c = key[i];
    if (c in p.keys) {
      p = p.keys[c];
    } else if (c.toLowerCase() in p.keys) {
      p = p.keys[c.toLowerCase()];
    }
  }
  p.values.forEach((e) => {
    if (isEqual(e, item)) {
      p.values.delete(e);
    }
  });
  return true;
};

const GNTrieFactory = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('data should be an array');
  }

  const root = new GNTrieNode('/');

  const n = data.length;
  for (let i = 0; i < n; i += 1) {
    if (Array.isArray(data[i]) && data[i].length === 2) {
      parseData(root, data[i][0], data[i][1]);
    }
  }

  return {
    search(keyword, exact = false) {
      if (!isString(keyword)) return [];
      return searchWord(root, keyword, exact);
    },
    remove(key, item) {
      removeItem(root, key, item);
    },
  };
};

const GNTrie = {
  createTrie: (data) => GNTrieFactory(data),
};

export default GNTrie;
