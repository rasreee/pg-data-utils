export function concatRegExp(...exps: RegExp[]) {
  let flags = exps.map((exp) => exp.flags).join('')
  flags = Array.from(new Set(flags.split(''))).join()

  return new RegExp(exps.map((exp) => exp.source).join(''), flags)
}
