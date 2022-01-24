export default function normalizeDateValue(value: string): string {
  const zeroes: number[] = []

  for (let i = 0; i < value.length - 1; i += 1) {
    if (value[i] === '0') {
      if (i === 0 || value[i - 1] === '0') {
        zeroes.push(i)
      }
    }
  }

  return value
    .split('')
    .filter((_, i) => !zeroes.includes(i))
    .join('')
}
