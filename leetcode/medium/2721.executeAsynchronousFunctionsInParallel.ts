type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    let resolvedCount = 0;
    const resultArray = Array(functions.length).fill(null);
    functions.forEach(async (fn, index) => {
      try {
        const res = await fn();
        resultArray[index] = res;
        resolvedCount++;
        if (resolvedCount === functions.length) resolve(resultArray);
      } catch (error) {
        reject(error);
      }
    });
  });
}

const input = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

const promise = promiseAll(input);
promise.then(console.log); // [42]
