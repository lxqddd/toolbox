<template>
  <n-config-provider :theme-overrides="darkTheme">
    <NuxtLayout>
      <NuxtPage :transition="{
        name: 'bounce',
        mode: 'out-in'
      }" />
    </NuxtLayout>
  </n-config-provider>
</template>
<script lang="ts">
  import { NConfigProvider, darkTheme } from 'naive-ui'



</script>