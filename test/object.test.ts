import duplicheck from '../src/duplicheck'

// write test code for checking objects, from simple to complex
describe('duplicheck', () => {
  // test 1: simple object
  test('simple object', () => {
    const source = { a: 1, b: 2 }
    const target = { a: 1, b: 2 }
    expect(duplicheck(source, target)).toEqual({ a: 1, b: 2 })
  })

  // test 2: simple object with different values
  test('simple object with different values', () => {
    const source = { a: 1, b: 2 }
    const target = { a: 1, b: 3 }
    expect(duplicheck(source, target)).toEqual({ a: 1 })
  })

  // test 3: simple object with different keys
  test('simple object with different keys', () => {
    const source = { a: 1, b: 2 }
    const target = { a: 1, c: 2 }
    expect(duplicheck(source, target)).toEqual({ a: 1 })
  })

  // test 4: simple object with different types
  test('simple object with different types', () => {
    const source = { a: 1, b: 2 }
    const target = { a: 1, b: '2' }
    expect(duplicheck(source, target)).toEqual({ a: 1 })
  })

  // test 5: simple object with nullish values
  test('simple object with nullish values', () => {
    const source = { a: null, b: undefined }
    const target = { a: null, b: undefined }
    expect(() => duplicheck(source, target)).toThrowError(
      'Cannot convert undefined or null to object'
    )
  })

  test('', () => {
    const source = { a: { b: 1, c: 3 }, d: { e: 1, f: 2 } }
    const target = { a: { b: 1, c: 3 }, d: { f: 1, e: 2 } }
    expect(duplicheck(source, target)).toEqual({ a: { b: 1, c: 3 } })
  })

  test('', () => {
    const source = {
      export: { '.': './test', './*': './dist/test' },
      import: { './src': { '.': './dist/test', './test': './dist/test' } },
    }
    const target = {
      export: { '.': './test', './*': './dist/test' },
      import: { './src': { './what': './dist/test', './test': './dist/test' } },
    }
    expect(duplicheck(source, target)).toEqual({
      export: { '.': './test', './*': './dist/test' },
      import: { './src': { './test': './dist/test' } },
    })
  })
})
