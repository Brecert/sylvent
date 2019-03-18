import { FancySylventEmitter } from '../src/index'

import { expect } from 'chai' 

describe('FancySylventEmitter', function() {
  let emitter = new FancySylventEmitter()

  it('should be created', function() {
    expect(emitter).to.exist
  })

  describe('#once', function() {
    it('should listen to emit once', function() {
      let onceCount = 0
      let onCount = 0

      emitter.once('test', event => {
        onceCount += 1
      })

      emitter.on('test', event => {
        onCount += 1
      })

      emitter.emit('test', 'hello world')
      emitter.emit('test', 1)
      emitter.emit('test', 2)
      emitter.emit('test', 'three')

      expect(onceCount).to.equal(1)
      expect(onCount).to.equal(4)
    })
  })


})