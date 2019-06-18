# Fixed Size Array

Based on [this comment](https://github.com/Microsoft/TypeScript/issues/6229#issuecomment-376988681)
```typescript
import {FixedSizeArray} from 'funny-types/fixed-array-size'

const goodArray: FixedSizeArray<number, 2> = [1, 2]
```
And you'll have type error if:

```typescript
import {FixedSizeArray} from 'funny-types/fixed-array-size'

const array: FixedSizeArray<number, 2> = [1, 2, 3]
``` 
or
```typescript
import {FixedSizeArray} from 'funny-types/fixed-array-size'

const array: FixedSizeArray<number, 2> = [1, 2]
array[2] = 5
``` 

