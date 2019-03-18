import Emitter from '../src/index'

import { expect } from 'chai' 

describe('Emitter', function() {
  let emitter = new Emitter()
  let emitCount = 0

  it('should be created', function() {
    expect(emitter).to.exist
  })

  describe('#on', function() {
    it('should listen to emit', function() {
      emitter.on('test', event => {
        emitCount += 1

        expect(event).to.equal('hello world')
      })
    })
  })

  describe('#emit', function() {
    it('should emit', function() {
      emitter.emit('test', 'hello world')
    })
  })

  describe('#removeListener', function() {
    it('should remove all test events after emit', function() {
      emitter.on('test', event => {
        let removed = emitter.removeListener('test')
        expect(removed).to.be.true
        expect(emitter._listeners).to.be.empty
      })
      
      it('should no longer activate on emit', function() {
        emitter.emit('test', 'second emit')
        expect(emitCount).to.eq(1)
      })
    })

  })

})