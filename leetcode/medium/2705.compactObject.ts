type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

// function compactObject(obj: Obj): Obj {
//   const recurse = (obj: Obj, result: any) => {
//     if (typeof obj !== 'object') {
//       if (Boolean(obj)) result.push(obj);
//       return result;
//     }

//     console.log(typeof obj, Object.entries(obj))
//     const entries = Object.entries(obj as any);
//     for (const [key, value] of entries) {
//       if (typeof value !== 'object') {
//         if (Boolean(value)) result[key] = value;
//       } else {
//         result[key] = Array.isArray(value) ? [] : {};
//         recurse(value as Obj, result[key]);
//       }
//     }
//     return result;
//   };

//   const res = Array.isArray(obj) ? [] : {};
//   return recurse(obj, res);
// }

function compactObject(obj: Obj): Obj {
  const recurse = (obj: any): any => {
    if (typeof obj !== 'object' || obj === null) return Boolean(obj) ? obj : undefined;

    if (Array.isArray(obj)) {
      return obj.map(recurse).filter((val) => val !== undefined);
    }

    const result: Obj = {};
    for (const [key, value] of Object.entries(obj)) {
      const compactedValue = recurse(value);
      if (compactedValue !== undefined) {
        result[key] = compactedValue;
      } else if (typeof value === 'object' && value !== null) {
        // Preserve empty objects and arrays
        result[key] = Array.isArray(value) ? [] : {};
      }
    }

    return result;
  };

  return recurse(obj);
}
const input = [null, 0, false, 1];
const res = compactObject(input);
console.log(res);
