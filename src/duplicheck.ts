export default function duplicheck(
  source: string | number | (string | number)[] | object,
  target: string | number | (string | number)[] | object
) {
  if (typeof source !== typeof target) {
    throw new Error('The type of the inputs must be the same')
  }

  if (typeof source === null || typeof target === null) {
    throw new Error('The inputs must not be nullish')
  }

  if (source === target) {
    return source
  }

  if (typeof source === 'string' && typeof target === 'string') {
    const differStartIdx = [...source].findIndex(
      (char, idx) => char !== target[idx] || idx >= target.length
    )
    return source.substring(0, differStartIdx)
  }

  if (typeof source === 'number' && typeof target === 'number') {
    const sourceStr = source.toString()
    const targetStr = target.toString()
    const differStartIdx = [...sourceStr].findIndex((char, idx) => {
      return char !== targetStr[idx] || idx >= targetStr.length
    })
    return parseFloat(sourceStr.substring(0, differStartIdx))
  }

  if (Array.isArray(source) && Array.isArray(target)) {
    return source.filter((item) => target.includes(item))
  }
}
