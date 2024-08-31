<template>
  <div class="flex flex-col flex-1 min-h-0 p-4">
    <n-upload :default-upload="false" :show-file-list="false" @change="handleSelectImage">
      <n-button>选择图片</n-button>
    </n-upload>
    <div class="flex flex-1">
      <div class="flex-1">
        <img ref="img" :src="imageUrl" alt="">
      </div>
      <div class="flex-1 h-100% ">
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

import {ref} from "vue"
import type {UploadFileInfo} from "naive-ui"

useHead({
  script: [
    {
      src: 'https://docs.opencv.org/4.x/opencv.js',
      // async: true,
      defer: true
    }
  ]
})

const img = ref<HTMLImageElement>()
const canvas = ref<HTMLCanvasElement>()
const imageUrl = ref('')
const handleSelectImage = async (options: { file: UploadFileInfo }) => {
  const file = options.file.file
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
    img.value.onload = processImage
  }
}

const processImage = () => {
  const imgElement = img.value
  const canvasElement = canvas.value
  const ctx = canvasElement.getContext('2d')
  canvasElement.width = imgElement.width
  canvasElement.height = imgElement.height

  ctx.drawImage(imgElement, 0, 0, imgElement.width * 1.5, imgElement.height * 1.5)
  if (typeof cv !== 'undefined') {
    console.log('hello world', cv)
    if (cv.getBuildInformation) {
      console.log('OpenCV.js is loaded')
      // sharpenImage();
      //   enhanceContrast();
        denoiseImage();
        resizeImage();
    }

      // cv.onRuntimeInitialized = function () {
      //   console.log('ready')
      // }
    // nextTick(() => {
      // cv.onRuntimeInitialized = () => {
      //   console.log('OpenCV.js is ready')
      //   sharpenImage();
      //   enhanceContrast();
      //   denoiseImage();
      //   resizeImage();
      // };
    // })
  } else {
    console.error("OpenCV.js is not loaded");
  }
}

const sharpenImage = () => {
  const imgElement = img.value
  const canvasElement = canvas.value
  const src = cv.imread(imgElement)
  const dst = new cv.Mat()
  let kernel = cv.matFromArray(3, 3, cv.CV_32F, [
    0, -1, 0,
    -1,  5, -1,
    0, -1, 0
  ]);

  // 使用 filter2D 函数进行卷积操作
  cv.filter2D(src, dst, cv.CV_8U, kernel);

  // 显示处理后的图像
  cv.imshow(canvasElement, dst);

  // 释放内存
  src.delete();
  dst.delete();
  kernel.delete();
}

const enhanceContrast = () => {
  const canvasElement = canvas.value
  const src = cv.imread(canvasElement)
  const dst = new cv.Mat()
  cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0)
  cv.equalizeHist(src, dst)
  cv.imshow(canvasElement, dst)
  src.delete()
  dst.delete()
}

const denoiseImage = () => {
  const canvasElement = canvas.value
  const src = cv.imread(canvasElement)
  const dst = new cv.Mat()
  cv.bilateralFilter(src, dst, 9, 75, 75, cv.BORDER_DEFAULT);
  cv.imshow(canvasElement, dst)
  src.delete()
  dst.delete()
}

const resizeImage = () => {
  const canvasElement = canvas.value
  let src = cv.imread(canvasElement)
  let dst = new cv.Mat()
  let dsize = new cv.Size(src.cols * 2, src.rows * 2)
  cv.resize(src, dst, dsize, 0, 0, cv.INTER_LINEAR)
  cv.imshow(canvasElement, dst)
  src.delete()
  dst.delete()
}

</script>

<style lang="scss" scoped>

</style>