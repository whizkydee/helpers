declare type ValueOf<T> = T[keyof T]
declare type PlainObject<T = any> = {
  [key: string]: T
}
