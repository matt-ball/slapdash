const isMatch = require('../src/isMatch')

describe('isMatch', () => {
  it('should return true if the object matches the spec', () => {
    expect(isMatch({ a: 1, b: 2 }, { a: 1 })).toBe(true)
  })

  it('should return false if the object does not match the spec', () => {
    expect(isMatch({ a: 1, b: 2 }, { a: 2 })).toBe(false)
  })

  it('should return false if the object does not match the spec with an array', () => {
    expect(isMatch({ a: 1, b: 2 }, { a: [2, 3] })).toBe(false)
  })
})
