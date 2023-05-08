# duplicheck

## Description

Duplicate Checker for any txt files

## Installation

```bash
npm install duplicheck

// or

yarn add duplicheck
```

## Pre-requisites

- Require check-this.txt file in the same directory you are running duplicheck from.

```txt
// check-this-example.txt

ABCD
ABCD
ABCD
ABCD
ABCD
EFGH
EFGH
EFGH
EFGH
IJKL
IJKL
IJKL
MNOP
MNOP
QRST
UVWX
YZYZ
```

## Usage

```js
const duplicheck = require('duplicheck'); // import duplicheck

// or

import duplicheck from 'duplicheck'; // import duplicheck

duplicheck(); // run duplicheck
```

## Output

```txt
// duplicates-example.txt

ABCD
EFGH
IJKL
MNOP

```
