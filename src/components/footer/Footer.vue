<script setup lang="ts">
  import { Separator } from '../ui/separator'
  import Wafe from './wafe.vue'
</script>

<template>
  <Wafe class="text-muted" />
  <footer class="w-full bg-muted">
    <section class="container mx-auto px-4 space-y-4 mb-12">
      <div>
        <img
          src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F85ee9e2e-cbda-4e15-955e-1696e2ff9f27.png&w=640&q=100"
          alt=""
          class="w-4/12 lg:w-1/12"
        />
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-8">
        <div class="space-y-8 col-span-2 lg:col-span-3">
          <p class="font-normal text-sm">
            No #1 supplier top up game & voucher terlaris, murah, aman legal 100% buka 24
            Jam dengan channel pembayaran terlengkap Indonesia.
          </p>
          <div class="flex gap-8">
            <img
              class="size-6"
              src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Ff6a1857c-6ced-41ab-99fb-2340b2dbe09c.webp&w=32&q=75"
              alt=""
            />
            <img
              class="size-6"
              src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F8f4f6f16-4763-4733-a595-c37c9aae94f1.webp&w=32&q=75"
              alt=""
            />
            <img
              class="size-6"
              src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2F509573ad-c36d-467e-884a-72a984a95330.webp&w=32&q=75"
              alt=""
            />
            <img
              class="size-6"
              src="https://www.bangjeff.com/_next/image?url=https%3A%2F%2Fcdn.bangjeff.com%2Ff233c760-d50d-40f6-a425-800559888c18.webp&w=32&q=75"
              alt=""
            />
          </div>
          <div class="space-y-1">
            <p class="text-sm font-normal">Download BANGJEFF Mobile App on:</p>
            <img
              class="h-8"
              src="https://www.bangjeff.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-play-android.4acd875c.png&w=128&q=75"
              alt=""
            />
          </div>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Partnership</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>Reseller</li>
            <li>Web Creation</li>
            <li>Affiliate</li>
            <li>Career</li>
          </ul>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Site Map</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>Contac Us</li>
            <li>Reviews</li>
            <li>Terms & Conditions</li>
            <li>Privacy Police</li>
          </ul>
        </div>
        <div class="gap-4 flex flex-col col-span-1 lg:col-span-1">
          <b class="text-primary">Support</b>
          <ul class="font-normal space-y-2 text-sm">
            <li>Telegram</li>
            <li>Line</li>
          </ul>
        </div>
      </div>
    </section>
    <Separator class="bg-muted-foreground" />
    <section class="container mx-auto px-4 font-normal py-6">
      <p class="text-muted-foreground text-sm text-center md:text-start">
        &copy; {{ new Date().getFullYear() }} BANGJEFF. All right reserved.
      </p>
    </section>
  </footer>
</template>
