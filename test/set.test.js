const set = require('../src/set');

describe('set', () => {
  it('should set a value', () => {
    const object = {}
    const result = set(object, 'a.b.c', 1)
    expect(result).toEqual({ a: { b: { c: 1 } } })
  })

  it('should set a value with an array', () => {
    const object = {}
    const result = set(object, 'a.b.c', [1, 2, 3])
    expect(result).toEqual({ a: { b: { c: [1, 2, 3] } } })
  })

  it('should set a value with an object', () => {
    const object = {}
    const result = set(object, 'a.b.c', { d: 1 })
    expect(result).toEqual({ a: { b: { c: { d: 1 } } } })
  })

  it('should set a value with an array and object', () => {
    const object = {}
    const result = set(object, 'a.b.c', [1, 2, { d: 1 }])
    expect(result).toEqual({ a: { b: { c: [1, 2, { d: 1 }] } } })
  })
})
