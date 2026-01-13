<script setup lang="ts">
  import type { GetDetailGame } from '@/types/games.type'
  import { CheckCircleIcon, CloudLightningIcon, MessageCircleMore } from 'lucide-vue-next'
  import { Skeleton } from '../ui/skeleton'

  const props = defineProps<{
    isPending: boolean
    data: GetDetailGame | null | undefined
  }>()
</script>

<template>
  <section class="mb-4">
    <div>
      <Skeleton v-if="isPending" class="banner rounded-none" />
      <img
        v-else
        fetchpriority="low"
        decoding="async"
        loading="lazy"
        alt="Banner"
        class="banner"
        :src="data?.coverUrl"
      />
    </div>
    <div class="wraped-image-title-studio">
      <div class="container-image-title-studio">
        <Skeleton
          v-if="isPending"
          class="col-span-4 md:col-span-3 lg:col-span-2 aspect-square rounded-md overflow-hidden shadow-sm"
        />
        <div v-else class="col-span-4 md:col-span-3 lg:col-span-2 aspect-square rounded-md overflow-hidden shadow-sm">
          <img
            fetchpriority="low"
            decoding="async"
            loading="lazy"
            :src="data?.imageUrl"
            alt="image"
            class="w-full h-full object-cover object-center"
          />
        </div>

        <div class="col-span-8 lg:col-span-9 space-y-1 md:space-y-2 ps-4 md:ps-10 flex flex-col">
          <Skeleton v-if="isPending" class="h-8 md:h-9 w-full" />
          <h1 v-else class="title">{{ data?.title }}</h1>
          <Skeleton v-if="isPending" class="h-6 md:h-7 w-full max-w-sm" />
          <h1 v-else class="studio">{{ data?.studio }}</h1>
          <div class="hidden md:flex lg:col-span-10 mt-4 items-center gap-4 font-semibold">
            <p class="row"><CloudLightningIcon class="size-4" /> Fast Process</p>
            <p class="row"><CheckCircleIcon class="size-4" /> Secure Payment</p>
            <p class="row"><MessageCircleMore class="size-4" /> CS 24/7</p>
          </div>
        </div>
        <div class="md:hidden col-span-12 text-xs pt-4 flex items-center gap-4 font-semibold">
          <p class="row"><CloudLightningIcon class="size-4" /> Fast Process</p>
          <p class="row"><CheckCircleIcon class="size-4" /> Secure Payment</p>
          <p class="row"><MessageCircleMore class="size-4" /> CS 24/7</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .banner {
    @apply w-full aspect-video md:aspect-10/3 lg:aspect-10/2 object-cover object-center;
  }

  .wraped-image-title-studio {
    @apply w-full bg-popover border-b;
  }

  .container-image-title-studio {
    @apply container mx-auto px-4 grid grid-cols-12 py-4 md:py-10 bg-popover;
  }

  .title {
    @apply line-clamp-2 font-semibold text-base md:text-2xl;
  }

  .studio {
    @apply line-clamp-1 font-normal text-sm md:text-xl text-muted-foreground;
  }

  .row {
    @apply flex gap-1 items-center;
  }
</style>
