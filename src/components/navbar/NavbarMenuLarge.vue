<script setup lang="ts">
  import { LogIn, LogOut } from 'lucide-vue-next'
  import { Button } from '../ui/button'
  import { data } from './data'
  import { useRouter } from 'vue-router'

  // state
  const props = defineProps<{
    token: undefined | string
  }>()
  const emits = defineEmits<{
    (e: 'onLogout'): void
  }>()
  const router = useRouter()

  // methods
  const handleLogout = () => {
    emits('onLogout')
  }
</script>

<template>
  <nav class="hidden lg:flex items-center justify-between w-full">
    <div class="container flex mx-auto justify-between px-2">
      <div class="flex">
        <Button
          v-for="(link, index) in data.links"
          :key="index"
          :variant="$route.path == link.href ? 'link' : 'default_link'"
          @click="router.push(link.href)"
          size="sm"
          class="w-fit"
        >
          <component :is="link.icon" /> {{ link.name }}
        </Button>
      </div>
      <div>
        <Button v-if="!props.token" variant="default_link" size="sm" class="w-fit" @click="router.push('/login')">
          <LogIn /> Login
        </Button>
        <Button v-if="props.token" variant="default_link" size="sm" class="w-fit" @click="handleLogout">
          <LogOut /> Logout
        </Button>
      </div>
    </div>
  </nav>
</template>
