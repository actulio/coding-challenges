type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  // const result = Array.isArray(obj) ? [] : {};
  // const compactObjectHelper = (obj: Obj | JSONValue, result: Obj): Obj => {
  //   if (typeof obj !== 'object' && Boolean(obj)) {
  //     if (Array.isArray(result)) result.push(obj);
  //   }
  //   if (Array.isArray(obj)) {
  //   }
  // };
  // return compactObjectHelper(obj, result);
}

const input = [null, 0, false, 1];
const res = compactObject(input);
console.log(res);
