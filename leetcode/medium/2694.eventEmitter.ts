type Callback = (...args: any[]) => any;
type Subscription = {
  unsubscribe: () => void;
};

class EventEmitter {
  private events: Map<string, Callback[]>;

  constructor() {
    this.events = new Map();
  }

  subscribe(eventName: string, callback: Callback): Subscription {
    const exists = this.events.get(eventName);
    if (exists) exists.push(callback);
    else this.events.set(eventName, [callback]);

    return {
      unsubscribe: () => {
        this.unsubscribe(eventName, callback);
      },
    };
  }

  emit(eventName: string, args: any[] = []): any[] {
    const callbacks = this.events.get(eventName);
    if (!callbacks) return [];

    return callbacks.map((callback) => callback(...args));
  }

  private unsubscribe(eventName: string, callback: Callback) {
    const callbacks = this.events.get(eventName);
    if (!callbacks) return undefined;

    const filtered = callbacks.filter((cb) => cb !== callback);
    this.events.set(eventName, filtered);
    return undefined;
  }
}

const emitter = new EventEmitter();

// Subscribe to the onClick event with onClickCallback
function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe('onClick', onClickCallback);

emitter.emit('onClick'); // [99]
sub.unsubscribe(); // undefined
emitter.emit('onClick'); // []
