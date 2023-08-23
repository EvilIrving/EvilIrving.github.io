<template>
  <li>
    <div @dblclick="changeType" @click="toggle" :class="[isFolder?'text-rose-600 font-bold':'light:text-slate-600 dark:text-zinc-50','text-lg cursor-pointer']">
      {{ model.name }}
      <span v-if="isFolder"> [{{ isOpen ?'-':'+' }}] </span>
    </div>

    <ul v-if="isFolder" v-show="isOpen">
      <TreeItem class="ml-6" v-for="(model,index) in model.children" :key="index" :model="model"></TreeItem>
      <li class=" ml-8 cursor-pointer text-cyan-500 active:opacity-50" @click="addItem">+</li>
    </ul>
  </li>
</template>

<script setup>
import { ref, reactive, computed, onMounted, watch } from 'vue'
const props = defineProps({
  model: Object
})
let isOpen = ref(false)
// 是否文件夹
let isFolder = computed(() => {
  return props.model.children && props.model.children.length
})

function toggle() {
  isOpen.value = !isOpen.value

}

function changeType() {
  if (!isFolder.value) {
    props.model.children = []
    addItem()
    isOpen.value = true
  }
}

function addItem() {
  props.model.children.push({ name: 'new Item' })
}

</script>

