import duplicheck from '../src/duplicheck' // Assuming duplicheck function is in a separate file

describe('duplicheck', () => {
  test('identical numbers', () => {
    const source = 123
    const target = 123
    const result = duplicheck(source, target)
    expect(result).toBe(123)
  })

  test('numbers with no common prefix', () => {
    const source = 987
    const target = 123
    const result = duplicheck(source, target)
    expect(result).toBeNaN()
  })

  test('numbers with common prefix', () => {
    const source = 456789
    const target = 456
    const result = duplicheck(source, target)
    expect(result).toBe(456)
  })

  test('zero as source', () => {
    const source = 0
    const target = 42
    const result = duplicheck(source, target)
    expect(result).toBeNaN()
  })

  test('zero as target', () => {
    const source = 123
    const target = 0
    const result = duplicheck(source, target)
    expect(result).toBeNaN()
  })

  test('numbers that differ in the middle', () => {
    const source = 123456789
    const target = 123789
    const result = duplicheck(source, target)
    expect(result).toBe(123)
  })

  test('both inputs are zero', () => {
    const source = 0
    const target = 0
    const result = duplicheck(source, target)
    expect(result).toBe(0)
  })

  test('numbers with decimals', () => {
    const source = 123.456
    const target = 123.45
    const result = duplicheck(source, target)
    expect(result).toBe(123.45)
  })

  test('numbers with underscores', () => {
    const source = 1_000_000
    const target = 1_000_999
    const result = duplicheck(source, target)
    expect(result).toBe(1_000)
  })
})
