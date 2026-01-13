<script setup lang="ts">
  import { Button } from '@/components/ui/button'
  import { Input } from '@/components/ui/input'
  import { Label } from '@/components/ui/label'
  import { Ticket } from 'lucide-vue-next'
  import { ref } from 'vue'
  import HeaderGame from '@/components/detail-game/HeaderGame.vue'
  import CardItem from '@/components/detail-game/CardItem.vue'
  import CardContainer from '@/components/detail-game/CardContainer.vue'
  import Summary from '@/components/detail-game/Summary.vue'
  import { useGetDetailGame } from '@/hooks/useGetDetailGame'
  import { useRoute } from 'vue-router'
  import { Skeleton } from '@/components/ui/skeleton'

  // state
  const itemActive = ref<undefined | string>(undefined)
  const inputVoucher = ref<undefined | string>(undefined)
  const inputID = ref<undefined | string>(undefined)
  const server = ref<undefined | string>(undefined)
  const route = useRoute()
  const { data, isPending } = useGetDetailGame(route.params.id as string)

  // methods
  const handleChangeItemActive = (id: string) => {
    itemActive.value = id
  }
</script>

<template>
  <HeaderGame :is-pending="isPending" :data="data?.data" />
  <section class="container mx-auto px-4 grid grid-cols-5 gap-4">
    <!-- product item -->
    <div class="col-span-5 lg:col-span-3 space-y-4">
      <CardContainer number="1" title="Input Information Account">
        <div class="flex flex-col md:flex-row items-center gap-4">
          <div class="w-full space-y-2">
            <Label>ID</Label>
            <Input
              v-model="inputID"
              type="number"
              class="font-normal"
              placeholder="Input ID"
            />
          </div>
          <div class="w-full space-y-2">
            <Label>Server</Label>
            <Input
              v-model="server"
              type="number"
              class="font-normal"
              placeholder="Input Server"
            />
          </div>
        </div>
      </CardContainer>
      <CardContainer
        v-if="data?.data?.categories && !isPending"
        number="2"
        title="Select Item"
      >
        <div class="flex flex-col gap-3" v-for="category in data?.data?.categories">
          <b>{{ category.name }}</b>
          <div
            v-if="category.items.length > 0"
            class="grid grid-cols-2 md:grid-cols-3 gap-4"
          >
            <CardItem
              v-for="item in category.items"
              class="transition-all duration-300"
              :class="item.id == itemActive && 'ring-2 ring-primary'"
              @click="handleChangeItemActive(item.id)"
              :id="item.id"
              :title="item.name"
              :price="item.price"
              :image_url="item.imageUrl"
              :key="item.id"
            />
          </div>
          <div
            v-else
            class="w-full py-4 flex justify-center items-center border rounded-md"
          >
            <p class="text-center font-medium text-sm">Item not yet available</p>
          </div>
        </div>
      </CardContainer>
      <CardContainer v-if="isPending" number="2" title="Select Item">
        <div class="flex flex-col gap-3">
          <Skeleton class="max-w-xs h-6" />
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Skeleton v-for="item in 6" class="aspect-video" />
          </div>
        </div>
      </CardContainer>
      <CardContainer number="3" title="Voucher Code">
        <div class="w-full flex flex-col md:flex-wrap gap-4">
          <Input
            v-model="inputVoucher"
            type="text"
            class="font-normal col-span-3"
            placeholder="Input Voucher Code (Opsional)"
          />
          <Button class="w-fit"> <Ticket /> Use Voucher </Button>
        </div>
      </CardContainer>
    </div>

    <!-- summary tab and desktop  -->
    <Summary />
  </section>
</template>

<style scoped>
  @import '../assets/main.css';

  .content {
    @apply container mx-auto px-4 flex items-center relative py-4;
  }

  .content-phone {
    @apply container mx-auto px-4 flex flex-wrap md:hidden items-center relative gap-4 text-xs font-normal pb-4;
  }

  .image-square {
    @apply border w-4/12 md:w-3/12 lg:w-2/12 aspect-square absolute bottom-4 md:bottom-8 rounded-md overflow-hidden object-cover object-center;
  }
</style>
