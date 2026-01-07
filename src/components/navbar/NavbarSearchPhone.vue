<script setup lang="ts">
  import { motion } from 'motion-v'
  import { Button } from '../ui/button'
  import { Search, SearchSlashIcon } from 'lucide-vue-next'
  import { Separator } from '../ui/separator'
  import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'

  const isSearch = defineModel<boolean>()
</script>

<template>
  <motion.section
    :class="
      isSearch
        ? 'fixed inset-0 z-40 px-4 lg:hidden backdrop-blur-sm transition-all duration-200'
        : 'invisible fixed inset-0 z-40 px-4 lg:hidden transition-all duration-200'
    "
  >
    <motion.div
      class="container mx-auto bg-popover border rounded-md mt-24 p-4 space-y-4"
      :initial="{ opacity: 0, y: -100 }"
      :animate="{ opacity: isSearch ? 1 : 0, y: isSearch ? 0 : -100 }"
      :transition="{ duration: 0.2 }"
    >
      <InputGroup>
        <InputGroupInput class="rounded-full" placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <Separator />
      <Button variant="ghost" class="w-full text-muted-foreground">
        <SearchSlashIcon /> No Results
      </Button>
    </motion.div>
  </motion.section>
</template>
