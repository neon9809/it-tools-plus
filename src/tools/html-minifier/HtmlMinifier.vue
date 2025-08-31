<script setup lang="ts">
import {
  ref,
  computed,
  watch,
  watchEffect
} from 'vue'

// 默认示例 HTML
const inputHtml = ref(`<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <style>
      body { color: red; }
    </style>
    <script>
      console.log("Hello world")
    <\/script>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`)

// 输出 HTML
const formattedHtml = ref('')

// 压缩选项
const options = ref({
  collapseWhitespace: true,
  removeComments: true,
})

// 简单 HTML 压缩函数（前端可用）
function simpleHtmlMinify(html: string, opts: typeof options.value) {
  let result = html
  if (opts.removeComments) result = result.replace(/<!--[\s\S]*?-->/g, '')
  if (opts.collapseWhitespace) result = result.replace(/\n/g, '').replace(/\s{2,}/g, ' ').trim()
  return result
}

// 执行压缩
function handleMinify() {
  try {
    formattedHtml.value = simpleHtmlMinify(inputHtml.value, options.value)
  } catch (e) {
    formattedHtml.value = `错误: ${(e as Error).message}`
  }
}

// 监听输入内容和选项变化，自动执行压缩
watchEffect(() => {
  handleMinify()
})

// 复制到剪贴板
async function copyToClipboard() {
  if (!formattedHtml.value || formattedHtml.value.startsWith('错误:')) return
  try {
    await navigator.clipboard.writeText(formattedHtml.value)
    alert('✅ 输出已复制到剪贴板！')
  } catch (err) {
    alert('❌ 复制失败')
  }
}

</script>

<template>
  <div class="space-y-5">
    <!-- 压缩选项卡片 -->
    <div>
      <c-card title="压缩选项">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <label class="flex items-center space-x-2">
            <input type="checkbox" v-model="options.collapseWhitespace" class="rounded" />
            <span class="text-sm">去除多余空格</span>
          </label>
          <label class="flex items-center space-x-2">
            <input type="checkbox" v-model="options.removeComments" class="rounded" />
            <span class="text-sm">删除注释</span>
          </label>
        </div>
      </c-card>
      <p> </p>
      <!-- 原始 HTML -->
      <c-card title="原始 HTML">
        <c-input-text v-model:value="inputHtml" multiline :rows="20" placeholder="输入要压缩的 HTML..."
          class="font-mono text-sm" />
      </c-card>
      <p> </p>
      <!-- 压缩后的 HTML -->
      <c-card class="w-full max-w-3xl">
        <!-- 默认 slot -->
        <div class="flex flex-col gap-2">
          <!-- 标题 + 复制按钮 -->
          <div class="flex justify-between items-center mb-2">
            <span class="font-medium">压缩后的 HTML</span>
            <c-button size="small" @click="copyToClipboard"
              :disabled="!formattedHtml || formattedHtml.startsWith('错误:')">
              复制
            </c-button>
          </div>

          <!-- 压缩后的内容 -->
          <div class="font-mono text-sm p-2 border rounded overflow-auto break-words whitespace-pre-wrap w-full"
            style="max-height: 400px;">
            {{ formattedHtml }}
          </div>
        </div>
      </c-card>

    </div>
  </div>
</template>