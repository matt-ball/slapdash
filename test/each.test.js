const each = require('../src/each');

describe('each', () => {
  it('should iterate over an array', () => {
    const array = [1, 2, 3, 4, 5]
    const result = []
    each(array, (value) => {
      result.push(value)
    })
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should iterate over a 2d array', () => {
    const array = [[1, 2], [3, 4], [5, 6]]
    const result = []
    each(array, (value) => {
      result.push(value)
    })
    expect(result).toEqual([[1, 2], [3, 4], [5, 6]])
  })
})
