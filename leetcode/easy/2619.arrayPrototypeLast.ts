interface Array<T> {
  last(): T | -1;
}

Array.prototype.last = function () {
  // const self = this as Array<any>;
  const self = this;
  if (self.length === 0) return -1;
  return self[self.length - 1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
