<script setup lang="ts">
  import { CheckCircleIcon, CloudLightningIcon, MessageCircleMore } from 'lucide-vue-next'
  import { data } from './data'
</script>

<template>
  <section class="main-content">
    <img
      loading="lazy"
      decoding="async"
      class="cover"
      alt="cover-image"
      :src="data.image_cover_url"
    />
    <section class="main-container">
      <div class="content">
        <div class="profile-container">
          <img
            class="profile"
            loading="lazy"
            decoding="async"
            alt="image-profile"
            :src="data.image_profile_url"
          />
        </div>
        <div class="w-5/12 md:w-3/12 lg:w-2/12"></div>
        <div class="space-y-1 md:space-y-2 md:ps-8">
          <h3 class="title">{{ data.game_title }}</h3>
          <b class="studio">{{ data.game_studio }}</b>
          <div class="content-large">
            <p class="row"><CloudLightningIcon class="size-4" /> Proses Cepat</p>
            <p class="row"><CheckCircleIcon class="size-4" /> Pembayaran Aman</p>
            <p class="row"><MessageCircleMore class="size-4" /> Layanan Chat 24/7</p>
          </div>
        </div>
      </div>
      <div class="content-phone">
        <p class="row"><CloudLightningIcon class="size-4" /> Proses Cepat</p>
        <p class="row"><CheckCircleIcon class="size-4" /> Pembayaran Aman</p>
        <p class="row"><MessageCircleMore class="size-4" /> Layanan Chat 24/7</p>
      </div>
    </section>
  </section>
</template>

<style scoped>
  @import '../../assets/main.css';

  .main-content {
    @apply w-full items-end pt-18 lg:pt-26 mb-4;
  }

  .cover {
    @apply h-50 md:h-80 lg:h-100 w-full object-cover object-center;
  }

  .content {
    @apply container mx-auto px-4 flex items-center relative py-4;
  }

  .main-container {
    @apply bg-muted dark:bg-popover w-full bottom-0 relative bg-cover bg-center;
  }

  .profile-container {
    @apply border w-4/12 md:w-3/12 lg:w-2/12 aspect-square absolute bottom-4 md:bottom-8 rounded-md overflow-hidden object-cover object-center;
  }

  .profile {
    @apply h-full w-full object-cover object-center;
  }

  .content-phone {
    @apply container mx-auto px-4 flex flex-wrap md:hidden items-center relative gap-4 text-xs font-normal pb-4;
  }

  .content-large {
    @apply hidden md:flex gap-10 py-4 font-normal text-sm;
  }

  .title {
    @apply text-base md:text-2xl line-clamp-1;
  }

  .studio {
    @apply text-base md:text-xl font-medium line-clamp-1;
  }
  .row {
    @apply flex gap-2;
  }
</style>
