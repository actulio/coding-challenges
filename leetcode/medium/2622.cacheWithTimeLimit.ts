export class TimeLimitedCache {
  private cache: Map<number, { value: number; timeout: any }>;
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    const exists = this.cache.get(key);

    if (exists) clearTimeout(exists.timeout);

    this.createEntry(key, value, duration);

    return !!exists;
  }

  createEntry(key: number, value: number, duration: number): void {
    const timeout = setTimeout(() => {
      this.cache.delete(key);
    }, duration);
    this.cache.set(key, { value, timeout });
  }

  get(key: number): number {
    const record = this.cache.get(key);
    if (record) return record.value;
    return -1;
  }

  count(): number {
    return this.cache.size;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
