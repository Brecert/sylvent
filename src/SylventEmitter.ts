export type EventHandler = <U>(data: U) => void

export default class SylventEmitter {
  /**
   * The listeners of the node
   */
  _listeners: Map<any, Set<(<U>(data: U) => void)>> = new Map();
  addListener = this.on

  /**
   * Create a listener
   */
  on<T>(event: T, cb: EventHandler) {
    if (!this._listeners.has(event)) {
      this._listeners.set(event, new Set)
    }

    this._listeners.get(event)!.add(cb);
  }

  /**
   * Removes a listener
   * returns a bool if anything was removed
   */
  removeListener<T>(event: T, handler?: EventHandler): boolean {
    if(!handler) {
      return this._listeners.delete(event)
    } else {
      if(this._listeners.has(event)) {
        return this._listeners.get(event)!.delete(handler)
      } else {
        return false
      }
    }
  }

  /**
   * Dispatch an event
   */
  emit<T, U>(event: T, data: U) {
    if (this._listeners.has(event)) {
      this._listeners.get(event)!.forEach(cb => {
        cb(data);
      });
    }
  }
}