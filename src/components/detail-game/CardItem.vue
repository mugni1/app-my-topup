<script setup lang="ts">
  import IconInstan from '@/icons/IconInstan.vue'

  const props = defineProps<{
    id: string
    image_url: string
    title: string
    price: number
  }>()
</script>

<template>
  <div class="main-container">
    <div class="header">
      <span class="text-xs md:text-base font-medium">{{ title }}</span>
      <div class="flex items-center gap-2 md:gap-5 pt-2">
        <img loading="lazy" :src="image_url" alt="logo" class="w-8 md:w-10" />
        <b class="price">Rp {{ price.toLocaleString('id-ID') }}</b>
      </div>
    </div>
    <div class="footer">
      <div class="bg-foreground w-fit p-1 rounded">
        <IconInstan class="text-background" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import '../../assets/main.css';

  .main-container {
    @apply bg-muted rounded-md overflow-hidden border cursor-pointer;
  }

  .header {
    @apply w-full p-2 md:p-4 text-xs md:text-sm font-normal;
  }

  .footer {
    @apply w-full bg-popover p-2 md:p-4 text-xs md:text-sm font-normal flex justify-end;
  }

  .price {
    @apply text-primary text-sm md:text-lg;
  }
</style>
