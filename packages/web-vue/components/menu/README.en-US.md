```yaml
meta:
  type: Component
  category: Navigation
title: Menu
description: Organize, arrange, and display a list of options.
```

*Auto translate by google.*

@import ./__demo__/horizontal.md

@import ./__demo__/dark-horizontal.md

@import ./__demo__/collapse-control.md

@import ./__demo__/breakpoint.md

@import ./__demo__/sub-menu.md

@import ./__demo__/size.md

@import ./__demo__/pop.md

@import ./__demo__/pop-button.md

## API


### `<menu>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|theme|Menu theme|`'light' \| 'dark'`|`'light'`|
|mode|The mode of menu|`'vertical' \| 'horizontal' \| 'pop' \| 'popButton'`|`'vertical'`|
|level-indent|Indentation between levels|`number`|`-`|
|auto-open|Expand all multi-level menus by default|`boolean`|`false`|
|collapsed **(v-model)**|Whether to collapse the menu|`boolean`|`-`|
|default-collapsed|Whether to collapse the menu by default|`boolean`|`false`|
|collapsed-width|Collapse menu width|`number`|`-`|
|accordion|Turn on the accordion effect|`boolean`|`false`|
|auto-scroll-into-view|Whether to automatically scroll the selected item to the visible area|`boolean`|`false`|
|show-collapse-button|Whether built-in folding button|`boolean`|`false`|
|selected-keys **(v-model)**|The selected menu item key array|`string[]`|`-`|
|default-selected-keys|The key array of the menu items selected by default|`string[]`|`[]`|
|open-keys **(v-model)**|Expanded submenu key array|`string[]`|`-`|
|default-open-keys|The default expanded submenu key array|`string[]`|`[]`|
|scroll-config|Scroll to the configuration items in the visible area and receive all the parameters of [scroll-into-view-if-needed](https://github.com/stipsan/scroll-into-view-if-needed)|`{ [key: string]: any }`|`-`|
|trigger-props|Accept all `Props` of `Trigger` in pop-up mode|`object`|`-`|
|tooltip-props|Accept all `Props` of `ToolTip` in pop-up mode|`object`|`-`|
|auto-open-selected|Expand the selected menus by default|`boolean`|`false`|
|breakpoint|Responsive breakpoints, see [Responsive Grid](/vue/component/grid) for details|`'xxl' \| 'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'`|`-`|
|popup-max-height|The maximum height of popover|`boolean \| number`|`true`|
### `<menu>` Events

|Event Name|Description|Parameters|
|---|---|---|
|collapse|Triggered when the collapsed state changes|collapsed: `boolean`<br>type: `'clickTrigger'\|'responsive'`|
|menu-item-click|Triggered when the menu item is clicked|key: `string`|
|sub-menu-click|Triggered when the submenu is clicked|key: `string`<br>openKeys: `string[]`|
### `<menu>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|collapse-icon|Collapse icon|collapsed: `boolean`|
|expand-icon-right|Icon expand right|-|
|expand-icon-down|Icon expand down|-|




### `<sub-menu>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|key|Unique key|`string`|`-`|
|title|The title of the submenu|`string`|`-`|
|selectable|In the pop-up mode, whether the multi-level menu header is also used as a menu item to support the state such as click to select|`boolean`|`false`|
|popup|Whether to force the use of pop-up mode, `level` indicates the level of the current submenu|`boolean \| ((level: number) => boolean)`|`false`|
|popup-max-height|The maximum height of popover|`boolean \| number`|`true`|
### `<sub-menu>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|title|Title|-|
|expand-icon-right|Icon expand right|-|
|expand-icon-down|Icon expand down|-|
|icon|the icon of menu item|-|




### `<menu-item-group>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|title|The title of the menu group|`string`|`-`|
### `<menu-item-group>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|title|Title|-|




### `<menu-item>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|key|Unique key|`string`|`-`|
|disabled|Whether to disable|`boolean`|`false`|
### `<menu-item>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|icon|the icon of menu item|-|


