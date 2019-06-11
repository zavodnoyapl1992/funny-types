# Custom types validations

Only types for create your custom dropdown, select box, tooltip or etc.
How it works:
```typescript
import {DropdownOptionsMapKeys, Option} from 'funny-types/custom-options'

type Map = {valueKey: 'value', labelKey: 'label'}

const data = [{value: '1', label: '2', test: 4}]
const options: Array<Option<Map, string>> = data
```
So, ``DropdownOptionsMapKeys`` - it is interface for your custom component, it has two properties:
``options`` - it's options:) and ``optionsMapKeys`` - it`s map for detect your custom keys for value and label.
``options`` - use type  Option for validate your data, for example if your change data
 to
 ```typescript

 const data = [{value: '1', label: '2', test: 4}, {test: 4}]
 const options: Array<Option<Map, string>> = data
 ```
  you will get error by typescript
 
