type Predicate<T, O extends T> = (arg: T) => arg is O
type Diff<T, U> = T extends U ? never : T

export type Nullable<T> = T | null | undefined

export const not = <T, O extends T>(p: Predicate<T, O>) => (
  arg: T
): arg is Diff<T, O> => !p(arg)

export const isNull = <T>(arg: T | null): arg is null => arg === null

export const isNullOrUndefined = <T>(
  arg: T | null | undefined
): arg is null | undefined => arg === null || arg === undefined
