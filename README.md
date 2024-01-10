<p align="center">
<a href="https://www.npmjs.com/package/generate-video-thumbnail" target="_blank" rel="noopener noreferrer">
<img src="https://api.iconify.design/material-symbols:gallery-thumbnail-outline-sharp.svg?color=%23b4b9fd" alt="logo" width='100'/></a>
</p>

<p align="center">
  A library generate thumbnail from video 
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/generate-video-thumbnail" target="_blank" rel="noopener noreferrer"><img src="https://badge.fury.io/js/csvs-parsers.svg" alt="NPM Version" /></a>
  <a href="https://www.npmjs.com/package/generate-video-thumbnail" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/npm/dt/csvs-parsers.svg?logo=npm" alt="NPM Downloads" /></a>
  <a href="https://bundlephobia.com/result?p=generate-video-thumbnail" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/bundlephobia/minzip/generate-video-thumbnail" alt="Minizip" /></a>
  <a href="https://github.com/hunghg255/generate-video-thumbnail/graphs/contributors" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/all_contributors-1-orange.svg" alt="Contributors" /></a>
  <a href="https://github.com/hunghg255/generate-video-thumbnail/blob/main/LICENSE" target="_blank" rel="noopener noreferrer"><img src="https://badgen.net/github/license/hunghg255/generate-video-thumbnail" alt="License" /></a>
</p>

> Generate video thumbnails from a video file

![demo](./example/public/demo.png)

## Install

```bash
npm install --save generate-video-thumbnail
```

## Usage

### `generateVideoThumbnails(selectedFile, numberOfThumbnails)`

#### Async/Await (Typescript & ES7)

```js
generateVideoThumbnails(videoFile, numberOfThumbnails)
  .then((thumbnailArray) => {
    // output will be arry of base64 Images
    // example - ["img1", "imgN"]
    // @todo - implement your logic here
  })
  .catch((err) => {
    console.error(err);
  });
```

### `generateVideoThumbnails(selectedFile, numberOfThumbnails, type, callback)`

#### Callback response (Typescript & ES7)

```js
const callback = (thumbnail, index) => {
  // thumbnail = base64 image
  // index = position on the final thumbnailArray
  // @todo - implement your logic here
};

generateVideoThumbnails(videoFile, numberOfThumbnails, type, callback)
  .then((thumbnailArray) => {
    // output will be arry of base64 Images
    // example - ["img1", "imgN"]
    // @todo - implement your logic here
  })
  .catch((err) => {
    console.error(err);
  });
```
