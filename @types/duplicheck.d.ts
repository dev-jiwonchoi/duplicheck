declare module 'duplicheck' {
  export default function duplicheck(
    source: string | number | (string | number)[],
    target: string | number | (string | number)[]
  ): string | number | (string | number)[]
}
