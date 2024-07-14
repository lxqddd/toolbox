<template>
  <div class="flex flex-col h-100vh bg-[var(--ui-background)] text-[var(--color-text)]">
      <div class="flex items-center p-2">
         <i class="mdi:tools text-15 text-[var(--color-menu-icon)]"></i>
        <h1 class="m-2">Toolbox</h1>
      </div>
      <div class="flex flex-1">
        <div class="flex flex-col ml-2 mr-2">
          <div v-for="item in menuList" :key="item.name" class="p-2">
            <n-popover placement="right">
              <template #trigger>
                <i v-if="item.iconType === 'icon'" :class="item.icon" class="hover:opacity-80 inline-block text-[var(--color-menu-icon)] text-12"></i>
                <img v-else :src="item.icon" class="w-12 w-12" alt="">
              </template>
              <span>{{ item.desc }}</span>
            </n-popover>
          </div>
        </div>
        <div class="flex-1">
          <slot />
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import Image2Base64 from '~/assets/imgs/image2Base64.png'
const menuList = [
  {
    icon: 'mdi:code-json',
    iconType: 'icon',
    name: 'JsonFormatter',
    desc: 'JSON 格式化'
  }, {
    icon: Image2Base64,
    iconType: 'img',
    name: 'imgToCode',
    desc: '图片转 Base64'
  }, {
    icon: 'mdi:image-edit-outline',
    iconType: 'icon',
    name: 'EnhanceImage',
    desc: '提高图片清晰图'
  }, {
    icon: '',
    iconType: 'icon',
    name: '',
    desc: 'Hex 转 rgba'
  }
]
</script>