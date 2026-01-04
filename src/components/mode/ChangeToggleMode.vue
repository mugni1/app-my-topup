<script setup lang="ts">
import { useColorMode } from '@vueuse/core'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { Monitor, Moon, Sun } from 'lucide-vue-next';

const mode = useColorMode()
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="outline" size="icon">
        <Moon v-show="mode == 'light'" />
        <Sun v-show="mode == 'dark'" />
        <Monitor v-show="mode == 'auto'" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="mode = 'light'">Light</DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'dark'">Dark</DropdownMenuItem>
      <DropdownMenuItem @click="mode = 'auto'">System</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
