export default class Emitter {
  /**
   * The listeners of the node
   */
  _listeners: Map<any, (<U>(data: U) => void)[]> = new Map();

  /**
   * Create a listener
   */
  on(listener: any, cb: <U>(data: U) => void) {
    if (!this._listeners.has(listener)) {
      this._listeners.set(listener, [])
    }
    this._listeners.get(listener)!.push(cb);
  }

  /**
   * Remove a listener
   */
  removeListener(listener: any) {
    return this._listeners.delete(listener)
  }

  /**
   * Dispatch an event
   */
  emit<T, U>(listener: any, data: U) {
    if (this._listeners.has(listener)) {
      this._listeners.get(listener)!.forEach(cb => {
        cb(data);
      });
    }
  }
}