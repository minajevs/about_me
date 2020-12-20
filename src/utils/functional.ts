import { flow, pipe } from "fp-ts/lib/function"
import * as O from "fp-ts/lib/Option"
import { isNullOrUndefined, Nullable } from "./predicates"

type Arr = readonly unknown[]

export const typed = <R, T = any>(cb: (args: T) => R) => (args: T) => cb(args)

export const getOrElse = <T>(a: T | null | undefined, b: T) =>
  pipe(
    a,
    O.fromNullable,
    O.getOrElse(() => b)
  )

export const matchIsEmpty = <T, R>(
  onEmpty: () => R,
  onSome: (arr: Array<T>) => R
) => (arr: Array<T>) => (arr.length === 0 ? onEmpty() : onSome(arr))

type NonNullableArr<T extends Arr> = {
  [K in keyof T]: NonNullable<T[K]>
}

type NullableArr<T extends Arr> = {
  [K in keyof T]: Nullable<T[K]>
}

export const foldNullablesTuple = <T extends readonly any[], R>(
  onEmpty: () => R,
  onSome: (ret: NonNullableArr<T>) => R
) => (arr: NullableArr<T>) =>
  arr.some(isNullOrUndefined) ? onEmpty() : onSome(arr as NonNullableArr<T>)

type NonNullableRec<T extends Record<string, any>> = {
  [K in keyof T]-?: NonNullable<T[K]>
}

type NullableRec<T extends Record<string, any>> = {
  [K in keyof T]: Nullable<T[K]>
}
export const foldNullables = <T extends Record<string, any>, R>(
  rec: Nullable<NullableRec<T>>,
  onEmpty: () => R,
  onSome: (ret: NonNullableRec<T>) => R
) =>
  isNullOrUndefined(rec) || Object.values(rec).some(isNullOrUndefined)
    ? onEmpty()
    : onSome(rec as NonNullableRec<T>)
