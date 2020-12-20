export const join = (separator?: string) => <T>(arr: Array<T>) =>
  arr.join(separator)

export const prop = <P extends keyof T, T extends {}>(p: P) => (obj: T): T[P] =>
  obj[p]

export const ret = <T>(arg: T): (() => T) => () => arg
