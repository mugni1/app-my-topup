<script setup lang="ts">
  import { Separator } from '@/components/ui/separator'
  import { onMounted, ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import { Headphones, LogInIcon, ShoppingBag } from 'lucide-vue-next'
  import Cookies from 'js-cookie'
  import { data } from './data'
  import { Button } from '../ui/button'

  // state
  const isLogin = ref<boolean>(false)

  // mounted
  onMounted(() => {
    const token = Cookies.get('token')
    if (!token) {
      isLogin.value = false
    } else {
      isLogin.value = true
    }
  })
</script>

<template>
  <div class="main-container-summary">
    <div class="container-summary">
      <div class="card-item-summary">
        <Headphones class="size-10" />
        <div class="text-sm">
          <p>You need help?</p>
          <p class="font-normal">You can call customer service in here.</p>
        </div>
      </div>
      <div class="card-item-summary flex flex-col border-dashed">
        <div class="flex items-center gap-4 w-full">
          <img
            :src="data.image_profile_url"
            alt="image"
            class="w-14 rounded-sm aspect-square object-cover object-center"
          />
          <div class="flex flex-col text-sm">
            <p class="title-summary">{{ data.game_title }}</p>
            <p class="sub-title-summary">200 Diamond</p>
          </div>
        </div>
        <div class="flex flex-col text-sm w-full space-y-2">
          <div class="flex items-center justify-between">
            <p class="font-medium">Price</p>
            <p class="font-normal">Rp 200000</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="font-medium">Item Count</p>
            <p class="font-normal">1</p>
          </div>
          <div class="flex items-center justify-between">
            <p class="font-medium">Const</p>
            <p class="font-normal">Rp 0</p>
          </div>
        </div>
        <Separator />
        <div class="flex items-center justify-between w-full">
          <p class="font-bold text-lg">Gross Amount</p>
          <p class="font-bold text-primary text-lg">Rp 200000</p>
        </div>
      </div>
      <Button v-if="isLogin" class="w-full text-background font-bold">
        <ShoppingBag /> Checkout Now
      </Button>
      <RouterLink v-else to="/login">
        <Button class="w-full text-background font-bold">
          <LogInIcon />Login To Continue
        </Button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  @import '../../assets/main.css';

  .main-container-summary {
    @apply col-span-2 relative hidden md:block;
  }

  .container-summary {
    @apply w-full sticky top-30 space-y-4;
  }

  .card-item-summary {
    @apply w-full p-4 flex items-center bg-popover rounded-md gap-4 border;
  }

  .sub-title-summary {
    @apply font-normal;
  }
</style>
