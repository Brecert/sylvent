function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export default class Emitter {
  constructor() {
    _defineProperty(this, "_listeners", new Map());
  }

  /**
   * Create a listener
   */
  on(listener, cb) {
    if (!this._listeners.has(listener)) {
      this._listeners.set(listener, []);
    }

    this._listeners.get(listener).push(cb);
  }
  /**
   * Remove a listener
   */


  removeListener(listener) {
    return this._listeners.delete(listener);
  }
  /**
   * Dispatch an event
   */


  emit(listener, data) {
    if (this._listeners.has(listener)) {
      this._listeners.get(listener).forEach(cb => {
        cb(data);
      });
    }
  }

}