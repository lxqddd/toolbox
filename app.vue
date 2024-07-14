<template>
  <n-config-provider :theme="darkTheme">
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'bounce',
        mode: 'out-in'
      }" />
    </NuxtLayout>
  </n-config-provider>
</template>
<script lang="ts" setup>
import { NConfigProvider, darkTheme } from 'naive-ui'
</script>