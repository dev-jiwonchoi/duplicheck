export default function duplicheck(
  source: string | number | any[] | object,
  target: string | number | any[] | object
) {
  if (typeof source !== typeof target) {
    throw new Error('The type of the inputs must be the same')
  }

  if (typeof source === 'string' && typeof target === 'string') {
    const differStartIdx = [...source].findIndex(
      (char, idx) => idx >= target.length || char !== target[idx]
    )
    return source.substring(0, differStartIdx)
  }
}
