# duplicheck

Retrieve duplicates from strings, numbers, arrays, or objects.

## Installation

```bash
npm install duplicheck
```

## Usage

#### String

```ts
import duplicheck from 'duplicheck'

const source = 'abcdefg'
const target = 'abcd'

const duplicates = duplicheck(source, target) // Output: 'abcd'
```

#### Number

```ts
import duplicheck from 'duplicheck'

const source = 123456789
const target = 12345

const duplicates = duplicheck(source, target) // Output: 12345
```

#### Array

```ts
import duplicheck from 'duplicheck'

const source = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
const target = ['a', 'b', 'c', 'd']

const duplicates = duplicheck(source, target) // Output: ['a', 'b', 'c', 'd']
```

#### Object

```ts
import duplicheck from 'duplicheck'

const source = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
const target = { a: 1, b: 2, c: 3, d: 4 }

const duplicates = duplicheck(source, target) // Output: { a: 1, b: 2, c: 3, d: 4 }
```