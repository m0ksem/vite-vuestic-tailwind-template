<script setup lang="ts">
import { ref } from "vue";
const size = ref("xs");

const sizeOptions = [
  { label: "XS", value: "xs" },
  { label: "S", value: "s" },
  { label: "M", value: "m" },
  { label: "L", value: "l" },
  { label: "XL", value: "xl" },
];

const liked = ref(false);
</script>

<template>
  <h2 class="va-h4 text-center mt-20 mb-6">Demo from <a href="https://tailwindcss.com/#build-anything" target="_blank">Tailwind</a> landing</h2>

  <va-card>
    <div class="flex flex-col md:flex-row font-sans">
      <div class="flex-none w-full h-60 md:h-auto md:w-48 relative">
        <img
          src="https://tailwindcss.com/_next/static/media/classic-utility-jacket.82031370.jpg"
          alt="Product image: Girl in jacket"
          class="absolute inset-0 w-full h-full object-cover rounded-tl-md rounded-bl-md"
          loading="lazy"
        />
      </div>
      <form class="flex-auto p-6">
        <div class="flex flex-wrap">
          <h1 class="flex-auto text-lg font-semibold text-slate-900">
            Classic Utility Jacket
          </h1>
          <div class="text-lg font-semibold text-secondary">$110.00</div>
          <div class="w-full flex-none text-sm font-medium text-secondary mt-2">
            In stock
          </div>
        </div>
        <div
          class="flex items-baseline mt-4 mb-6"
        >
          <va-button-toggle v-model="size" :options="sizeOptions" preset="primary" toggle-color="textPrimary" />
        </div>
        <va-divider />
        <div class="flex space-x-4 mb-6 text-sm font-medium">
          <div class="flex-auto flex space-x-4">
            <va-button
              class="h-10 px-6 max-sm:px-2 font-semibold rounded-md"
              type="submit"
            >
              Buy now
            </va-button>
            <va-button
              preset="primary"
              class="h-10 px-6 max-sm:px-2 font-semibold rounded-md"
            >
              Add to bag
            </va-button>
          </div>
          <va-button
            preset="secondary"
            class="w-9 h-9 rounded-md"
            :color="liked ? 'secondary' : '#f0f'"
            aria-label="Like"
            icon="favorite"
            @click="liked = !liked"
          />
        </div>
        <p class="text-sm text-secondary">
          Free shipping on all continental US orders.
        </p>
      </form>
    </div>
  </va-card>
</template>
