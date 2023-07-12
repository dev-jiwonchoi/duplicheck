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

#### Nested Arrays

```ts
import duplicheck from 'duplicheck'

const source = [['a', 'b', 'c'], [['d', 'e', 'f'], 'g'], 'h']

const target = [['a', 'b'], [['d', 'e', 'f'], 'g'], 'h', 123]

const duplicates = duplicheck(source, target) // Output: [[['d', 'e', 'f'], 'g'], 'h']
```

#### Object

```ts
import duplicheck from 'duplicheck'

const source = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }
const target = { a: 1, b: 2, c: 3, d: 4 }

const duplicates = duplicheck(source, target) // Output: { a: 1, b: 2, c: 3, d: 4 }
```

#### Nested Objects

```ts
import duplicheck from 'duplicheck'

const source: Record<string, any> = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA',
  },
}

const target: Record<string, any> = {
  name: 'John',
  age: 30,
  address: {
    street: '456 Elm St',
    city: 'New York',
    country: 'USA',
  },
}

const duplicates: Record<string, any> = duplicheck(source, target)
/* Output:
{
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
}
*/
```
