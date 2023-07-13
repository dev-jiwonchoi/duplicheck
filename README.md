# duplicheck

Retrieve duplicates from strings, numbers, arrays, or objects.

## Installation

```bash
npm install duplicheck
```

## Real World Use Case

#### String

```ts
import dc from 'duplicheck'

const userAPI = getUserAPI() // 'https://example.com/api/v1/users'
const projectAPI = getProjectAPI() // 'https://example.com/api/v1/projects'

const baseAPI = dc(userAPI, projectAPI) // 'https://example.com/api/v1/'
```

#### Array

```ts
import dc from 'duplicheck'

const userArray = [
  { name: 'John Doe', age: 20 },
  { name: 'Jane Doe', age: 21 },
  { name: 'Jiwon Choi', age: 5 },
]

const authorizedUserArray = [
  { name: 'John Doe', age: 20 },
  { name: 'John Cena', age: 21 },
]

// Output: [{ name: 'John Doe', age: 20 }]
const validatedUserArray = dc(userArray, authorizedUserArray)
```

#### Object

```ts
import dc from 'duplicheck'
import { PageProps, LayoutProps } from './types'

// PageProps
// {
//   path: string,
//   children: React.ReactNode
// }

// LayoutProps
// {
//   title: string,
//   description: string,
//   path: string,
//   children: React.ReactNode
// }

const commonProps = dc(ButtonProps, InputProps)

// Output: { path: string, children: React.ReactNode }
```
