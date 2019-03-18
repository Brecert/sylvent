import SylventEmitter from '../src/index'
let emitter = new SylventEmitter()

emitter.on('test', data => console.log('received', data))

emitter.emit('test', '1')

emitter.removeListener('test')

emitter.emit('test', '2')


console.debug('listeners', emitter._listeners)