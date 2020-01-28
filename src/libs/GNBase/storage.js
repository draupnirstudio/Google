import ls from 'local-storage';

export default {
  // eslint-disable-next-line no-unused-vars
  get(key, options) {
    return ls(key);
  },
  // eslint-disable-next-line no-unused-vars
  set(key, value, options) {
    return ls(key, value);
  },
};
