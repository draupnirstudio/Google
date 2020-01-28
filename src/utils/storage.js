/**
 * GNStorage utils
 * Kefei Qian(kefei.qian@hotmail.com)
 * Licensed under the MIT License
 *
 * Last Modified: 20191115
 */

import GNStorage from '@lib/GNBase/storage';
import { isNil } from 'lodash';

const { PROJECT_NAME } = process.env;

let prefix;

const getPrefix = async () => {
  const res = await GNStorage.get('GNLoginSuccessKey', true);
  if (!isNil(res)) {
    prefix = `${PROJECT_NAME}-${res.userId}`;
    return prefix;
  }
  return PROJECT_NAME;
};

const storage = {
  async get(key, options = {}) {
    prefix = prefix || (await getPrefix());
    return GNStorage.get(`${prefix}-${key}`, options);
  },
  async set(key, value, options = {}) {
    prefix = prefix || (await getPrefix());
    return GNStorage.set(`${prefix}-${key}`, value, options);
  },
};

export default storage;
