<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <a v-if="item.link " :href="`${item.link}.html`">{{ item.text }}</a>
      <span v-else> {{ item.text }} </span>
      <ul>
        <li v-for="(c, i) in item.items" :key="i">
          <a :href="`${c.link}.html`">{{ c.text }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import type { INav } from "./type";
const props = defineProps<{
  list: INav[];
}>();
</script>
