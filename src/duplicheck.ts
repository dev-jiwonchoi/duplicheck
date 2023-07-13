export default function duplicheck(source: any, target: any): any {
  if (source === target) {
    return source
  }

  if (![source, target].every((obj) => obj !== null && obj !== undefined)) {
    throw new Error('Invalid source or target object')
  }

  if (typeof source !== typeof target) {
    throw new Error('The type of the inputs must be the same')
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
    const result: any = []

    source.forEach((item1) => {
      const item1String = JSON.stringify(item1)

      target.forEach((item2) => {
        const item2String = JSON.stringify(item2)

        if (item1String === item2String) {
          result.push(item1)
        } else if (Array.isArray(item1) && Array.isArray(item2)) {
          const nestedResult = duplicheck(item1, item2)
          if (nestedResult.length > 0) {
            result.push(nestedResult)
          }
        }
      })
    })

    return result
  }

  if (typeof source === 'object' && typeof target === 'object') {
    const sourceKeys = Object.keys(source)
    const targetKeys = Object.keys(target)
    const commonKeys = sourceKeys.filter((key) => targetKeys.includes(key))
    const commonObj = commonKeys.reduce((acc, key) => {
      if (typeof source[key] === 'object' && typeof target[key] === 'object') {
        const nestedObj = duplicheck(source[key], target[key])
        if (Object.keys(nestedObj).length > 0) {
          acc[key] = nestedObj
        }
      } else if (Array.isArray(source[key]) && Array.isArray(target[key])) {
        const nestedArr = duplicheck(source[key], target[key])
        if (nestedArr.length > 0) {
          acc[key] = nestedArr
        }
      } else if (source[key] === target[key]) {
        acc[key] = source[key]
      }
      return acc
    }, {} as any)
    return commonObj
  }
}
