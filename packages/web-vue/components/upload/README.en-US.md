```yaml
meta:
  type: Component
  category: Data Entry
title: Upload
description: Users can transfer files or submit corresponding content.
```

*Auto translate by google.*


@import ./__demo__/basic.md

@import ./__demo__/avatar.md

@import ./__demo__/upload-list.md

@import ./__demo__/picture-card.md

@import ./__demo__/draggable.md

@import ./__demo__/picture-list.md

@import ./__demo__/submit.md

@import ./__demo__/before-upload.md

@import ./__demo__/before-remove.md

@import ./__demo__/limit.md

@import ./__demo__/custom-button.md

@import ./__demo__/custom-icon.md

@import ./__demo__/request.md

@import ./__demo__/directory.md

## API


### `<upload>` Props

|Attribute|Description|Type|Default|
|---|---|---|:---:|
|file-list **(v-model)**|File List|`FileItem[]`|`-`|
|default-file-list|Default file list (uncontrolled state)|`FileItem[]`|`[]`|
|accept|For the received upload file type, please refer to [HTML standard](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#htmlattrdefaccept "_blank")|`string`|`-`|
|action|Uploaded URL|`string`|`-`|
|disabled|Whether to disable|`boolean`|`false`|
|multiple|Whether to support multiple file upload|`boolean`|`false`|
|directory|Whether to support folder upload (requires browser support)|`boolean`|`false`|
|draggable|Whether to support drag and drop upload|`boolean`|`false`|
|tip|Prompt text|`string`|`-`|
|headers|Additional header information for upload request|`Record<string, string>`|`-`|
|data|Upload request additional data|`Record<string, string \| Blob>\| ((fileItem: FileItem) => Record<string, string \| Blob>)`|`-`|
|name|Uploaded file name|`string \| ((fileItem: FileItem) => string)`|`-`|
|with-credentials|Whether the upload request carries cookies|`boolean`|`false`|
|custom-request|Custom upload behavior|`(option: RequestOption) => UploadRequest`|`-`|
|limit|Limit the number of uploaded files. `0` means no limit|`number`|`0`|
|auto-upload|Whether to upload files automatically|`boolean`|`true`|
|show-file-list|Whether to display the file list|`boolean`|`true`|
|show-remove-button|Whether to display the remove button|`boolean`|`true`|
|show-retry-button|Whether to display the retry button|`boolean`|`true`|
|show-cancel-button|Whether to display the cancel button|`boolean`|`true`|
|show-upload-button|Whether to display the retry button. Added `showOnExceedLimit` support in version 2.14.0|`boolean \| { showOnExceedLimit: boolean }`|`true`|
|download|Whether to add download attribute to `<a>` link|`boolean`|`false`|
|show-link|In the list mode, if the uploaded file has a URL, the link will be displayed. If you turn off only display text and click to trigger the `preview` event.|`boolean`|`true`|
|image-loading|Native HTML attributes of `<img>`, browser support is required|`'eager' \| 'lazy'`|`-`|
|list-type|Picture list type|`'text' \| 'picture' \| 'picture-card'`|`'text'`|
|response-url-key|Get the key of the image URL in the Response. After opening, it will replace the pre-load image with the uploaded image|`string \| ((fileItem: FileItem) => string)`|`-`|
|custom-icon|Custom icon|`CustomIcon`|`-`|
|on-before-upload|Trigger before uploading a picture|`(file: File) => Promise<boolean \| File>`|`-`|
|on-before-remove|Triggered before removing the picture|`(fileItem: FileItem) => Promise<boolean>`|`-`|
|on-button-click|Click the upload button to trigger (if the Promise is returned, the default input upload will be closed)|`(event: Event) => Promise<FileList> \| void`|`-`|
### `<upload>` Events

|Event Name|Description|Parameters|
|---|---|---|
|exceed-limit|Triggered when the uploaded image exceeds the limit|fileList: `FileItem[]`<br>files: `File[]`|
|change|Triggered when the status of the uploaded image changes|fileList: `FileItem[]`<br>fileItem: `fileItem`|
|progress|Triggered when the uploading image progress changes|fileItem: `fileItem`<br>ev: `ProgressEvent`|
|preview|Trigger when the image preview is clicked|fileItem: `FileItem`|
|success|Triggered when upload is successful|fileItem: `FileItem`|
|error|Triggered when upload fails|fileItem: `FileItem`|
### `<upload>` Methods

|Method|Description|Parameters|Return|
|---|---|---|:---:|
|submit|Upload file (file that has been initialized)|fileItem: `FileItem`|-|
|abort|Abort upload|fileItem: `FileItem`|-|
|updateFile|Update file|id: `string`<br>file: `File`|-|
### `<upload>` Slots

|Slot Name|Description|Parameters|
|---|---|---|
|image|Image|fileItem: `FileItem`|
|file-name|File name|-|
|file-icon|File icon|-|
|remove-icon|Remove icon|-|
|preview-icon|Preview icon|-|
|cancel-icon|Cancel icon|-|
|start-icon|Start icon|-|
|error-icon|Error icon|-|
|success-icon|Success icon|-|
|retry-icon|Retry icon|-|
|upload-button|Upload button|-|
|upload-item|Upload list item|fileItem: `FileItem`<br>index: `number`|




### FileItem

|Name|Description|Type|Default|
|---|---|---|:---:|
|uid|The unique identifier of the currently uploaded file|`string`|`-`|
|status|The status of the currently uploaded file|`FileStatus`|`-`|
|file|File object|`File`|`-`|
|percent|Upload progress percentage|`number`|`-`|
|response|The response returned by the current file upload request|`any`|`-`|
|url|The image address|`string`|`-`|
|name|Picture file name|`string`|`-`|



### CustomIcon

|Name|Description|Type|Default|
|---|---|---|:---:|
|startIcon|Start icon|`RenderFunction`|`-`|
|cancelIcon|Cancel icon|`RenderFunction`|`-`|
|retryIcon|Retry icon|`RenderFunction`|`-`|
|successIcon|Success icon|`RenderFunction`|`-`|
|errorIcon|Error icon|`RenderFunction`|`-`|
|removeIcon|Remove icon|`RenderFunction`|`-`|
|previewIcon|Preview icon|`RenderFunction`|`-`|
|fileIcon|File icon|`(fileItem: FileItem) => VNode`|`-`|
|fileName|File name|`(fileItem: FileItem) => string \| VNode`|`-`|



### RequestOption

|Name|Description|Type|Default|
|---|---|---|:---:|
|action|Uploaded URL|`string`|`-`|
|headers|Header information of the request message|`Record<string, string>`|`-`|
|name|File name of the uploaded file|`string \| ((fileItem: FileItem) => string)`|`-`|
|fileItem|upload files|`FileItem`|`-`|
|data|Additional requested information|`Record<string, string \| Blob>    \| ((fileItem: FileItem) => Record<string, string \| Blob>)`|`-`|
|withCredentials|Whether to carry cookie information|`boolean`|`false`|
|onProgress|Update the upload progress of the current file. percent: current upload progress percentage|`(percent: number, event?: ProgressEvent) => void`|`-`|
|onSuccess|After the upload is successful, call the onSuccess method, the incoming response parameter will be appended to the response field of the currently uploaded file|`(response?: any) => void`|`-`|
|onError|After the upload fails, call the onError method, and the response parameter passed in will be appended to the response field of the currently uploaded file|`(response?: any) => void`|`-`|



### UploadRequest

|Name|Description|Type|Default|
|---|---|---|:---:|
|abort|Terminate upload|`() => void`|`-`|


