/**
 * Cached History List using LRU algorithm
 * Kefei Qian(kefei.qian@hotmail.com)
 * Licensed under the MIT License
 *
 * Last Modified: 20191115
 */

import {
  isEmpty, isNumber, isString, isArray,
} from 'lodash';
import storage from '@util/storage';

const MAX_SIZE = Infinity;

const GNCachedHistoryListFactory = async (cacheKey, defaultList, maxSize) => {
  let _cachedList;
  let _maxSize = MAX_SIZE;
  if (isString(cacheKey)) {
    if (isArray(defaultList)) {
      _cachedList = [...defaultList];
      if (isNumber(maxSize) && maxSize > 0) {
        _maxSize = maxSize;
      }
    } else {
      if (isNumber(defaultList) && defaultList > 0) {
        _maxSize = defaultList;
      }
      _cachedList = (await storage.get(cacheKey)) || [];
    }
  } else if (isArray(cacheKey)) {
    _cachedList = [...cacheKey];
    if (isNumber(defaultList) && defaultList > 0) {
      _maxSize = defaultList;
    }
  } else if (isNumber(cacheKey) && cacheKey > 0) {
    _maxSize = cacheKey;
    _cachedList = [];
  } else {
    _maxSize = MAX_SIZE;
    _cachedList = [];
  }

  const hashSet = new Set();
  let list = [];

  for (let i = 0; i < _cachedList.length && list.length <= _maxSize; i += 1) {
    const e = _cachedList[i];
    const key = JSON.stringify(e);
    if (!hashSet.has(key)) {
      list.push(e);
      hashSet.add(key);
    }
  }

  return {
    getList() {
      return [...list];
    },

    async refer(e, shouldSave = false) {
      if (isEmpty(e)) return this.getList();

      const t = JSON.stringify(e);
      if (hashSet.has(t)) {
        this.remove(e);
      } else if (hashSet.size === _maxSize) {
        const last = list.pop();
        hashSet.delete(JSON.stringify(last));
      }
      list.unshift(e);
      hashSet.add(t);

      if (shouldSave) {
        await this.save();
      }

      return this.getList();
    },

    async save() {
      if (!isString(cacheKey)) {
        console.warn(
          '[GNHistoryList]: You need provide a valid string cacheKey to call the save function',
        );
        return false;
      }
      await storage.set(cacheKey, list);
      return true;
    },

    async clear() {
      list = [];
      hashSet.clear();
      return this.getList();
    },

    async remove(e, shouldSave = false) {
      const t = JSON.stringify(e);
      if (hashSet.has(t)) {
        let index = 0;
        for (let i = 0; i < list.length; i += 1) {
          if (t === JSON.stringify(list[i])) {
            index = i;
            break;
          }
        }
        list.splice(index, 1);
        hashSet.delete(t);

        if (shouldSave) {
          await this.save();
        }
      }
      return this.getList();
    },
  };
};

const GNHistoryList = {
  createList(cacheKey, list, maxSize) {
    return GNCachedHistoryListFactory(cacheKey, list, maxSize);
  },
};

export default GNHistoryList;
