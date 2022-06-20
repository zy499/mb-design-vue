```yaml
meta:
  type: Component
  category: Common
title: ConfigProvider
description: Configure in the outermost layer of the application, set once, and take effect globally. Generally used to set functions such as internationalized languages.
```

*Auto translate by google.*

@import ./__demo__/basic.md

@import ./__demo__/empty.md

## API


### `<config-provider>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|prefix-cls|Component classname prefix|`string`|`'mb'`|
|locale|Configure language pack|`MbLang`|`-`|
|size|Size|`Size`|`-`|
|global|Is global effect|`boolean`|`false`|
### `<config-provider>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|loading|Custom loading element|-|
|empty|Custom empty element|-|




## FAQ

### Global Config

When the `global` property is set to `true`, the configuration content will be injected into the Vue AppContext, which is generally used to solve the problem that the configuration content cannot take effect when the functional call method of the Modal and Message components is used.
