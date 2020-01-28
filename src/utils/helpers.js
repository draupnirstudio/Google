const baseHeight = 768;

export const px2vh = (px) => `${100 * (px / baseHeight)}vh`;


export const hashCode = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash;
  }
  return hash.toString();
};


export const isInside = (x, y, rect) => {
  const {
    top, bottom, left, right,
  } = rect;
  return x > left && x < right && y > top && y < bottom;
};
