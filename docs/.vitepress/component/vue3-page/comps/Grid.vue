<template>
  <div>
    <table>
      <thead>
        <th v-for="column in columns" :key="column">
          {{ column }}
          <span :class="['arrow',filter?'dsc':'asc']"></span>
        </th>
      </thead>
      <tbody>
        <tr v-for="entry in gridData">
          <td v-for="key in columns" :key="key">{{ 
            entry[key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
  gridData: Array,
  queryData: String,
  columns: Array
})

let filter = ref(false)
</script>

<style scoped>
.arrow {
  @apply inline-block;
  @apply align-middle;
  @apply w-0;
  @apply h-0;
  @apply border-l-4;
  @apply border-r-4;
  @apply border-x-transparent;
  @apply border-b-black;
  @apply opacity-60;
}

.arrow.asc {
  @apply border-b-4;
}
.arrow.asc:hover {
  @apply hover:border-b-emerald-600;
  @apply active:border-b-emerald-600;
  @apply hover:opacity-100;
  @apply active:opacity-100;
}
.arrow.dsc {
  @apply border-t-4;
}
.arrow.dsc:hover {
  @apply hover:border-b-emerald-600;
  @apply active:border-b-emerald-600;
  @apply hover:opacity-100;
  @apply active:opacity-100;
}
</style>