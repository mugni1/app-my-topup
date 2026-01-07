<script setup lang="ts">
  import { CalendarClockIcon, LogIn, Scale, Search, ShoppingBag } from 'lucide-vue-next'
  import { InputGroup, InputGroupAddon, InputGroupInput } from '../ui/input-group'
  import { Button } from '../ui/button'
  import ChangeToggleMode from '../mode/ChangeToggleMode.vue'
</script>

<template>
  <header class="w-full fixed backdrop-blur-xs bg-card/70 border-b z-50">
    <nav class="container mx-auto">
      <div class="flex justify-between items-center gap-4 py-4 px-3">
        <img src="/anu.gif" alt="brand.logo" class="h-10" />
        <InputGroup class="hidden lg:flex">
          <InputGroupInput class="rounded-full" placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <ChangeToggleMode />
      </div>
      <div class="hidden lg:flex items-center justify-between w-full">
        <div>
          <Button variant="ghost" class="w-fit"> <ShoppingBag /> Top Up </Button>
          <Button variant="ghost" class="w-fit"> <CalendarClockIcon /> Transaction </Button>
          <Button variant="ghost" class="w-fit"> <Scale /> Calculator </Button>
        </div>
        <div>
          <Button variant="link" class="w-fit"> <LogIn /> Login </Button>
        </div>
      </div>
    </nav>
  </header>
</template>
