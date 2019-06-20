# ORM Interfaces

Maybe it's will base for my custom js-orm, maybe not:), but I think it's a helpful interfaces
let see them:
```typescript
NullObject<T> 
```
It's has few simple methods for works with DTO or Entity object, for example:
- isExists - check its empty object or not
- isChanged - check, are you changed original object or not
- isSaved - check, are you saved changed or new object or not
- getDiff - get difference between original object and current his state
- setProperties - it's method for initialization NullObject, you'll can set you properties there
- toSimpleObject - get original object without NullObject abstraction
```typescript
Selectable<S extends object, T>
```
It's simple interface for select by search condition (S) and return NullObject or NullObject collection,
its has one method
- find - by criteria and optional params - order
```typescript
Writable<S extends object, T>
```
It's simple interface for write to your storage with methods:
- bulkUpdate 
- bulkSave
- bulkDelete
- save
- delete

And, for comfort ``ORM`` interface - combine Selectable and Writable
