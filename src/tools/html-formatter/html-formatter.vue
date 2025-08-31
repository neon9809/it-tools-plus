<template>
  <div>
    <div class="mb-5">
      <c-card title="格式化选项">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <label class="block text-sm font-medium mb-1">缩进大小</label>
            <c-input-text v-model:value="indentSizeStr" type="number" :min="1" :max="8" class="w-20" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1">缩进字符</label>
            <select v-model="options.indent_char" class="px-3 py-2 border border-gray-300 rounded-md text-sm">
              <option value=" ">空格</option>
              <option value="\t">Tab</option>
            </select>
          </div>
          <label class="flex items-center space-x-2">
            <input v-model="wrapAttributes" type="checkbox" class="rounded">
            <span class="text-sm">换行属性</span>
          </label>
          <label class="flex items-center space-x-2">
            <input v-model="options.preserve_newlines" type="checkbox" class="rounded">
            <span class="text-sm">保留换行</span>
          </label>
        </div>
      </c-card>
      <p> </p>
      <c-card title="原始HTML">
        <c-input-text v-model:value="inputHtml" multiline :rows="20" placeholder="输入要格式化的HTML代码..."
          class="font-mono text-sm" />
      </c-card>
      <p> </p>

      <c-card>
        <!-- 默认 slot -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between items-center mb-2">
            <span class="font-medium">格式化后的 HTML</span>
            <c-button size="small" @click="copyToClipboard"
              :disabled="!formattedHtml || formattedHtml.startsWith('错误:')">
              复制
            </c-button>
          </div>

          <div class="font-mono text-sm p-2 border rounded overflow-auto break-words whitespace-pre-wrap w-full"
            style="max-height: 400px;">
            {{ formattedHtml }}
          </div>
        </div>
      </c-card>


    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    ref,
    computed,
    watch
  } from 'vue';
  import {
    html as beautifyHtml
  } from 'js-beautify';
  import {
    useCopy
  } from '@/composable/copy';

  const {
    copy
  } = useCopy();

  const inputHtml = ref(
    `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Example</title><style>body{margin:0;padding:20px;background:#f5f5f5}.container{max-width:800px;margin:0 auto}</style></head><body><div class="container"><h1>Hello World</h1><p>This is a paragraph with <a href="#link">a link</a> inside.</p><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul><div class="content"><p>More content here</p></div></div><script>console.log('Hello!');<\/script><\/body><\/html>`
    );

  const indentSizeStr = ref('2');
  const wrapAttributes = ref(false);

  const options = ref({
    indent_size: 2,
    indent_char: ' ',
    wrap_attributes: 'auto',
    preserve_newlines: true,
    max_preserve_newlines: 2,
    end_with_newline: true,
    wrap_line_length: 120,
  });

  // 监听缩进大小变化
  watch(indentSizeStr, (newVal) => {
    const num = parseInt(newVal) || 2;
    options.value.indent_size = Math.max(1, Math.min(8, num));
  });

  // 监听属性换行设置
  watch(wrapAttributes, (newVal) => {
    options.value.wrap_attributes = newVal ? 'force' : 'auto';
  });

  const formattedHtml = computed(() => {
    try {
      if (!inputHtml.value.trim()) return '';
      return beautifyHtml(inputHtml.value, options.value);
    } catch (error) {
      console.error('HTML formatting error:', error);
      return `错误: 无法格式化HTML代码 - ${error.message}`;
    }
  });

  const copyToClipboard = () => {
    copy(formattedHtml.value);
  };

</script>
