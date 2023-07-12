import duplicheck from '../src/duplicheck'

describe('duplicheck', () => {
  test('arrays with common prefix', () => {
    const source = [1, 2, 3, 4, 5]
    const target = [1, 2, 3, 6, 7]
    const result = duplicheck(source, target)
    expect(result).toEqual([1, 2, 3])
  })

  test('arrays with no common prefix', () => {
    const source = [1, 2, 3, 4, 5]
    const target = [6, 7, 8, 9, 0]
    const result = duplicheck(source, target)
    expect(result).toEqual([])
  })

  test('empty arrays', () => {
    const source: any[] = []
    const target: any[] = []
    const result = duplicheck(source, target)
    expect(result).toEqual([])
  })

  test('arrays with one element common prefix', () => {
    const source = [1, 2, 3, 4]
    const target = [1, 5, 6, 7]
    const result = duplicheck(source, target)
    expect(result).toEqual([1])
  })

  test('arrays with no elements', () => {
    const source: any[] = []
    const target: any[] = []
    const result = duplicheck(source, target)
    expect(result).toEqual([])
  })

  test('arrays with different lengths', () => {
    const source = [1, 2, 3, 4, 5]
    const target = [1, 2]
    const result = duplicheck(source, target)
    expect(result).toEqual([1, 2])
  })

  test('arrays with string elements', () => {
    const source = ['apple', 'banana', 'cherry']
    const target = ['apple', 'banana', 'grape']
    const result = duplicheck(source, target)
    expect(result).toEqual(['apple', 'banana'])
  })

  test('arrays with nullish values', () => {
    const source = [null, undefined, 123, 'hello']
    const target = [null, undefined, 456, 'world']
    const result = duplicheck(source, target)
    expect(result).toEqual([null, undefined])
  })

  test('arrays with different types', () => {
    const source = [1, 2, 3]
    const target = ['1', '2', '3']
    const result = duplicheck(source, target)
    expect(result).toEqual([])
  })

  it('should return the common elements between source and target arrays', () => {
    const source = [1, 2, 3, { name: 'John' }, [4, 5]]
    const target = [2, 3, { name: 'John' }, [5, 6]]
    const result = duplicheck(source, target)
    expect(result).toEqual([2, 3, { name: 'John' }])
  })

  // Test case 3
  it('should handle nested arrays correctly', () => {
    const source = [1, [3, 4], [4, [6, 7]]]
    const target = [2, [3, 4], [5, [6, 7]]]
    const result = duplicheck(source, target)
    expect(result).toEqual([[3, 4]])
  })

  // Test case 4
  it('should handle arrays of objects correctly', () => {
    const source = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]
    const target = [
      { id: 2, name: 'Jane' },
      { id: 3, name: 'Bob' },
    ]
    const result = duplicheck(source, target)
    expect(result).toEqual([{ id: 2, name: 'Jane' }])
  })

  // Test case 5
  it('should handle arrays of arrays of objects correctly', () => {
    const source = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ]
    const target = [{ id: 2, name: 'Jane' }, [{ id: 3, name: 'Bob' }]]
    const result = duplicheck(source, target)
    expect(result).toEqual([{ id: 2, name: 'Jane' }])
  })

  it('should handle deeply nested arrays correctly', () => {
    const source = [1, [2, [3, [4, [5]]]]]
    const target = [0, [2, [0, [4, [5]]]]]
    const result = duplicheck(source, target)
    expect(result).toEqual([])
  })
})
