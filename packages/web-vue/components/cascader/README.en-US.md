```yaml
meta:
  type: Component
  category: Data Entry
title: Cascader
description: Refers to the use of multi-level classification to separate the options when the number of selector options is large.
```

*Auto translate by google.*

@import ./__demo__/basic.md

@import ./__demo__/clear.md

@import ./__demo__/disabled.md

@import ./__demo__/format.md

@import ./__demo__/multiple.md

@import ./__demo__/check-strictly.md

@import ./__demo__/loading.md

@import ./__demo__/lazy-load.md

@import ./__demo__/search.md

@import ./__demo__/path.md

@import ./__demo__/fallback.md

@import ./__demo__/field-names.md

@import ./__demo__/expand.md

@import ./__demo__/panel.md

## API


### `<cascader>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|path-mode|Whether the value is a path|`boolean`|`false`|
|multiple|Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)|`boolean`|`false`|
|model-value **(v-model)**|Value|`string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined`|`-`|
|default-value|Default value (uncontrolled state)|`string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined`|`'' \| undefined \| []`|
|options|Options for cascader|`CascaderOption[]`|`[]`|
|disabled|Whether to disable|`boolean`|`false`|
|error|Whether it is an error state|`boolean`|`false`|
|size|The size of the select|`'mini' \| 'small' \| 'medium' \| 'large'`|`'medium'`|
|allow-search|Whether to allow searching|`boolean`|`false (single) \| true (multiple)`|
|allow-clear|Whether to allow clear|`boolean`|`false`|
|input-value **(v-model)**|The value of the input|`string`|`-`|
|default-input-value|The default value of the input (uncontrolled state)|`string`|`''`|
|popup-visible **(v-model)**|Whether to show the dropdown|`boolean`|`-`|
|expand-trigger|Expand the trigger method of the next level|`'click' \| 'hover'`|`'click'`|
|default-popup-visible|Whether to display the dropdown by default (uncontrolled state)|`boolean`|`false`|
|placeholder|Placeholder|`string`|`-`|
|filter-option|Custom options filter method|`(inputValue: string, option: CascaderOption) => boolean`|`-`|
|popup-container|Mount container for popup|`string \| HTMLElement \| null \| undefined`|`-`|
|max-tag-count|In multi-select mode, the maximum number of labels displayed. 0 means unlimited|`number`|`0`|
|format-label|Format display content|`(options: CascaderOption[]) => string`|`-`|
|trigger-props|Trigger props of the drop-down menu|`TriggerProps`|`-`|
|check-strictly|Whether to enable strict selection mode|`boolean`|`false`|
|load-more|Data lazy loading function, open the lazy loading function when it is passed in|`(  option: CascaderOption,  done: (children?: CascaderOption[]) => void) => void`|`-`|
|loading|Whether it is loading state|`boolean`|`false`|
|search-option-only-label|Whether the options in the search dropdown show only label|`boolean`|`false`|
|search-delay|Delay time to trigger search event|`number`|`500`|
|field-names|Customize fields in `CascaderOption`|`CascaderFieldNames`|`-`|
|value-key|Used to determine the option key value attribute name|`string`|`'value'`|
|fallback|Options that do not exist in custom values|`boolean\| ((    value:      \| string      \| number      \| Record<string, unknown>      \| (string \| number \| Record<string, unknown>)[]  ) => string)`|`true`|
|expand-child|whether to expand the submenu|`boolean`|`false`|
### `<cascader>` Events

|Event Name|Description|Parameters|
|---|---|---|
|change|Triggered when the selected value changes|value: `string \| number \| (string \| number \| (string \| number)[])[] \| undefined`|
|input-value-change|Triggered when the input value changes|value: `string`|
|clear|Triggered when the clear button is clicked|-|
|search|Triggered when the user searches|value: `string`|
|popup-visible-change|Triggered when the display state of the dropdown changes|visible: `boolean`|
|focus|Triggered when focus|ev: `FocusEvent`|
|blur|Triggered when blur|ev: `FocusEvent`|
### `<cascader>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|label|Display content of label|data: `CascaderOption`|
|prefix|Prefix|-|
|arrow-icon|Arrow icon for select box|-|
|loading-icon|Loading icon for select box|-|
|search-icon|Search icon for select box|-|
|empty|Display content when the option is empty|-|
|option|Display content of options|data: `CascaderOption`|




### `<cascader-panel>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|path-mode|Whether the value is a path|`boolean`|`false`|
|multiple|Whether it is a multi-selection state (The search is turned on by default in the multi-select mode)|`boolean`|`false`|
|model-value **(v-model)**|Value|`string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined`|`-`|
|default-value|Default value (uncontrolled state)|`string\| number\| Record<string, any>\| (    \| string    \| number    \| Record<string, any>    \| (string \| number \| Record<string, any>)[]  )[]\| undefined`|`'' \| undefined \| []`|
|options|Options for cascader|`CascaderOption[]`|`[]`|
|expand-trigger|Expand the trigger method of the next level|`string`|`'click'`|
|check-strictly|Whether to enable strict selection mode|`boolean`|`false`|
|load-more|Data lazy loading function, open the lazy loading function when it is passed in|`(  option: CascaderOption,  done: (children?: CascaderOption[]) => void) => void`|`-`|
|field-names|Customize fields in `CascaderOption`|`CascaderFieldNames`|`-`|
|value-key|Used to determine the option key value attribute name|`string`|`'value'`|
|expand-child|whether to expand the submenu|`boolean`|`false`|
### `<cascader-panel>` Events

|Event Name|Description|Parameters|
|---|---|---|
|change|Triggered when the selected value changes|value: `string \| number \| (string \| number \| (string \| number)[])[] \| undefined`|
### `<cascader-panel>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|empty|Display content when the option is empty|-|




### CascaderOption

|Name|Description|Type|Default|
|---|---|---|:---:|
|value|Option value, version 2.29.0 supports objects|`string \| number \| Record<string, any>`|`-`|
|label|Option text|`string`|`-`|
|render|Custom render|`RenderFunction`|`-`|
|disabled|Whether to disable|`boolean`|`false`|
|tagProps|Displayed tag attributes|`TagProps`|`-`|
|children|Next level options|`CascaderOption[]`|`-`|
|isLeaf|Whether it is a leaf node|`boolean`|`false`|


