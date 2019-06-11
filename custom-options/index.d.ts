export interface DropdownOptionsMapKeys {
  readonly valueKey: string
  readonly labelKey: string
}

type OptionValue<V extends DropdownOptionsMapKeys, T> = {
  [value in V['valueKey']]: T
}
type OptionLabel<V extends DropdownOptionsMapKeys> = {
  [label in V['labelKey']]: string
}

export type Option<V extends DropdownOptionsMapKeys, T> = OptionValue<V, T> & OptionLabel<V> & { [key: string]: any }

export interface DropdownProps<T> {
  options: Array<Option<DropdownOptionsMapKeys, T>>
  optionsMapKeys: DropdownOptionsMapKeys
}
