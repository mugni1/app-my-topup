<script setup lang="ts">
  import { Menu, X } from 'lucide-vue-next'
  import { Button } from '../ui/button'
  import { motion } from 'motion-v'

  const isOpen = defineModel<boolean>()
  const emits = defineEmits<{
    (e: 'changeIsOpen', value: boolean): void
  }>()

  // methods
  const changeIsOpen = () => emits('changeIsOpen', !isOpen.value)
</script>

<template>
  <Button variant="outline" size="icon" @click="changeIsOpen">
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: !isOpen ? 1 : 0, y: !isOpen ? 0 : -20 }"
      :transition="{ duration: 0.3 }"
    >
      <Menu />
    </motion.div>
    <motion.div
      class="absolute"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }"
      :transition="{ duration: 0.3 }"
    >
      <X />
    </motion.div>
  </Button>
</template>
