type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

export function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const joinedArr = arr1.concat(...arr2);
  const map = new Map();
  joinedArr.forEach((e) => {
    const item = map.get(e.id) || {};
    Object.assign(item, e);
    map.set(e.id, item);
  });
  return Array.from(map.values()).sort((a, b) => a.id - b.id);
}
