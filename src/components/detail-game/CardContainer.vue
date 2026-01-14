<script setup lang="ts">
  const props = defineProps<{
    number: string
    title: string
  }>()
</script>

<template>
  <div class="w-full bg-popover rounded-md overflow-hidden border">
    <div class="h-12 w-full bg-muted flex border-b">
      <div class="h-full aspect-square border-e text-primary flex items-center justify-center font-medium text-base">
        {{ number }}
      </div>
      <div class="px-4 flex h-full items-center justify-center font-medium text-base">{{ title }}</div>
    </div>
    <div class="p-4 md:p-6 space-y-4"><slot></slot></div>
  </div>
</template>
