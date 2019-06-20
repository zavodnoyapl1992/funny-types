export interface NullObject<T> {
  isExists: () => boolean

  isChanged: () => boolean

  isSaved: () => boolean

  getDiff: () => []

  setProperties: (data: T) => void

  toSimpleObject: () => T | null
}

export interface Selectable<S extends object, T> {
  find: (searchBy: S, orderBy?: []) => NullObject<T> | Array<NullObject<T>>
}

export interface Writable<S extends object, T> {
  bulkUpdate: (searchBy: S, updateProps: []) => boolean

  bulkSave: (items: Array<NullObject<T>>) => boolean

  bulkDelete: (deleteBy: S) => boolean

  save: (item: NullObject<T>) => boolean

  delete: (item: NullObject<T>) => boolean
}

export interface ORM<S extends object, T> extends Selectable<S, T>, Writable<S, T> {}
