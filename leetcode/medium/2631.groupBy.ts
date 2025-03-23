interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>;
}

Array.prototype.groupBy = function (fn) {
  const self = this;
  const result: Record<string, any[]> = {};

  for (let elem of self) {
    const groupId = fn(elem);
    if (result[groupId]) result[groupId].push(elem);
    else result[groupId] = [elem];
  }
  return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

const entry = [{ id: '1' }, { id: '1' }, { id: '2' }];
const fn = function (item: any) {
  return item.id;
};
console.log(entry.groupBy(fn));
// const entry =[[1,2,3],[1,3,5],[1,5,9]]
// const fn =  function (list) { return String(list[0]); }
// const entry =[1,2,3,4,5,6,7,8,9,10]
// const fn = function (n) { return String(n > 5); }
