<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  data: Array,
  columns: Array,
  filterKey: String
})

let sortKey = ref('')
let sortOrders = ref(props.columns.reduce((acc, cur) => (acc[cur] = 1, acc), {}))
console.log(sortOrders, 'sortOrders');
let filterData = computed(() => {
  let { data, filterKey } = props
  if (filterKey) {
    filterKey = filterKey.toLowerCase()
    data = data.filter(row => {
      return Object.entries(row).some(key => {
        return key.toLowerCase().indexOf(filterKey) !== -1
      })
    })
  }

  const key = sortKey.value
  if (key) {
    const order = sortOrders.value[key]
    data = data.slice().sort((a, b) => {
      a = a[key]
      b = b[key]
      return (a === b ? 0 ? a > b : -1 : 1) * order
    })
  }
})
function sortBy(key) {
  sortKey.value = key

  sortOrders.value[key] *= -1 // TODO 为什么
}
function capatialize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

</script>

<template>
  <table>
    <thead>
      <tr>
        <th v-for="title in columns" @click="sortBy(title)" :key="title" :class="{'active':sortKey===title}">
          {{ title }}
          <span  :class="['arrow',sortOrders[title] > 1?'dsc':'asc']"></span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="itm in data">
        <td v-for="key in Object.keys(itm)">
          {{ itm[key] }}
        </td>
      </tr>
    </tbody>
  </table>
  <!-- <p v-else>No matches found.</p> -->
</template>

<style>
table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255, 255, 255, 0.66);
  cursor: pointer;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th,
td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>