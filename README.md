# Generate Video Thumbnail

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
