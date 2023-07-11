import duplicheck from '../src/duplicheck' // Assuming duplicheck function is in a separate file

describe('duplicheck', () => {
  test('identical strings', () => {
    const source = 'Hello'
    const target = 'Hello'
    const result = duplicheck(source, target)
    expect(result).toBe('Hello')
  })

  test('strings with no common prefix', () => {
    const source = 'OpenAI'
    const target = 'GPT-3'
    const result = duplicheck(source, target)
    expect(result).toBe('')
  })

  test('strings with common prefix', () => {
    const source = 'JavaScript'
    const target = 'Java'
    const result = duplicheck(source, target)
    expect(result).toBe('Java')
  })

  test('empty string as source', () => {
    const source = ''
    const target = 'Hello'
    const result = duplicheck(source, target)
    expect(result).toBe('')
  })

  test('empty string as target', () => {
    const source = 'OpenAI'
    const target = ''
    const result = duplicheck(source, target)
    expect(result).toBe('')
  })

  test('strings that differ in the middle', () => {
    const source = 'ABC123XYZ'
    const target = 'ABC789XYZ'
    const result = duplicheck(source, target)
    expect(result).toBe('ABC')
  })
})
