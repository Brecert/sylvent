import Emitter from '../src/index'

import { expect } from 'chai' 

describe('Emitter', function() {
  let emitter = new Emitter()

  it('should be created', function() {
    expect(emitter).to.exist
  })

  describe('#on', function() {
    it('should listen to emit', function() {
      emitter.on('test', event => {
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
    it('should remove event after emit', function() {
      emitter.on('test', event => {
        emitter.removeListener('test')
      })
    })
  })

})