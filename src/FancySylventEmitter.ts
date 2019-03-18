import SylventEmitter, { EventHandler } from './SylventEmitter'

export default class FancySylventEmitter extends SylventEmitter {

  /**
   * Only receives and handles the event once
   */
  once<T>(event: T, cb: EventHandler) {
    const oneEmit = (...args: any) => {
      cb(args)
      this.removeListener(event, oneEmit)
    }

    this.addListener(event, oneEmit)
  }
}