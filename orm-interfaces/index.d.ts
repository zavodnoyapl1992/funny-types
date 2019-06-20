export interface NullObject<T> {
  isExists: () => boolean

  isChanged: () => boolean

  isSaved: () => boolean

  getDiff: () => []

  setProperties: (data: T) => void

  toSimpleObject: () => T | null
}

export interface Selectable<T> {
  find: (searchBy: object, orderBy?: object) => NullObject<T> | Array<NullObject<T>>
}

export interface Writable<T> {
  bulkUpdate: (searchBy: object, updateProps: []) => boolean

  bulkSave: (items: Array<NullObject<T>>) => boolean

  bulkDelete: (deleteBy: object) => boolean

  save: (item: NullObject<T>) => boolean

  delete: (item: NullObject<T>) => boolean
}

export interface ORM<T> extends Selectable<T>, Writable<T> {}
