```yaml
meta:
  type: Component
  category: Data Entry
title: AutoComplete
description: The auto-complete function of the input.
```

*Auto translate by google.*

@import ./__demo__/basic.md

@import ./__demo__/strict.md

## API


### `<auto-complete>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|model-value **(v-model)**|Value|`string`|`-`|
|default-value|Default value (uncontrolled mode)|`string`|`''`|
|disabled|Whether to disable|`boolean`|`false`|
|data|Data used for auto-complete|`(string \| number \| SelectOptionData \| SelectOptionGroup)[]`|`[]`|
|popup-container|Mount container for popup|`string \| HTMLElement \| null \| undefined`|`-`|
|strict|Whether it is strict verification mode|`boolean`|`false`|
|filter-option|Custom option filtering method|`FilterOption`|`true`|
|trigger-props|trigger props|`object`|`-`|
|allow-clear|Whether to allow the input to be cleared|`boolean`|`false`|
### `<auto-complete>` Events

|Event Name|Description|Parameters|
|---|---|---|
|change|Emitted when the value changes|value: `string`|
|search|Emitted when the user searches|value: `string`|
|select|Emitted when an option is selected|value: `string`|
|clear|Triggered when the user clicks the clear button|ev: `Event`|
### `<auto-complete>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|option|Display content of options|data: `OptionInfo`|


