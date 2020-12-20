import * as A from "fp-ts/lib/Array"
import { flow, pipe } from "fp-ts/lib/function"
import { matchIsEmpty } from "./functional"
import { join, ret } from "./pointfree"
import { isNull, isNullOrUndefined, not, Nullable } from "./predicates"

export const joinWithDefault = (
  arr: Array<Nullable<string>>,
  separator: string,
  defaultValue: string
) =>
  pipe(
    arr,
    A.filter(not(isNullOrUndefined)),
    matchIsEmpty(ret(defaultValue), join(separator))
  )
