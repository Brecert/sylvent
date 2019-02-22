export default class Emitter {
    /**
     * The listeners of the node
     */
    _listeners: Map<any, (<U>(data: U) => void)[]>;
    /**
     * Create a listener
     */
    on(listener: any, cb: <U>(data: U) => void): void;
    /**
     * Remove a listener
     */
    removeListener(listener: any): boolean;
    /**
     * Dispatch an event
     */
    emit<T, U>(listener: any, data: U): void;
}
