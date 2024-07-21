<template>
  <div class="flex h-100%">
    <div class="mr-4 flex-1">
       <MonacoEditor class="h-100%" v-model="prevPrettierJson" lang="json" :options="MonacoEditOptions"/>
    </div>
    <div ref="prettiedEditRef" class="flex-1">
      <MonacoEditor class="h-100%" v-model="prettiedJson" lang="json" :options="MonacoEditOptions"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type * as monaco from 'monaco-editor'

const MonacoEditOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
  language: 'json',
  theme: 'vs-dark',
  automaticLayout: true,
  minimap: { enabled: false },
  fontSize: 14,
  formatOnPaste: true,
  formatOnType: true,
  tabSize: 2,
  cursorStyle: 'line',
  wordWrap: 'on',
  lineNumbers: 'on',
  folding: true,
  matchBrackets: 'always',
  autoIndent: 'full',
  snippetSuggestions: 'inline'
}
const prevPrettierJson = ref('')
const prettiedJson = ref('')


watch(prevPrettierJson, async (newVal, oldVal) => {
  prettiedJson.value = await formatJson(newVal)
})


const formatJson = async (jsonStr: string) => {
  try {
    return JSON.stringify(JSON.parse(jsonStr), null, 2)
  } catch (error) {
    return (error as Error).message
  }
}

</script>