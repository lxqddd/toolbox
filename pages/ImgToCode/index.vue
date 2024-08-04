<template>
  <div class="flex flex-col flex-1 min-h-0">
    <n-upload :default-upload="false" :show-file-list="false" @change="handleSelectImage">
      <n-button>选择图片</n-button>
    </n-upload>
    <div class="flex flex-1">
      <div class="flex-1">
        <img :src="imageUrl" alt="">
      </div>
      <div class="flex-1 break-all overflow-y-auto h-100%">{{ imageBase64Code }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { UploadFileInfo } from 'naive-ui';
import { ref } from 'vue'

const imageUrl = ref('')
const imageBase64Code = ref('')
const handleSelectImage = async (options: { file: UploadFileInfo }) => {
  const file = options.file.file
  console.log(file)
  if (file) {
    imageUrl.value = URL.createObjectURL(file)
    console.log(imageUrl.value)
    const res = await fileToBase64(file)
    imageBase64Code.value = res
  }
}

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  })
}
</script>