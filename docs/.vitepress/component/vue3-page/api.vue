<template>
  <div>
    <h3 class="text-center">{{title}}</h3>

    <div class="flex justify-between w-full h-[400px] mx-10 mt-10">
      <section class="w-1/5 h-full border-2 p-4  border-orange-500">
        <ul class="w-full mx-auto mt-5 ">
          <tree-item class="text-rose-600 text-lg" :model="treeData"></tree-item>
        </ul>
      </section>
      <section :class="sectionClass">
        <div class="">
          <span>Search</span>
          <input @change.enter="queryGrid" v-model="inputValue" type="text" style="border:1px solid black" id="input" class="leading-tight ml-4 border-orange-200">
        </div>
        <grid :columns="columns" :grid-data="gridData" :query-data="inputValue"></grid>

      </section>
      <section :class="sectionClass">
        f
      </section>
      <section :class="sectionClass">
        f
      </section>
      <section :class="sectionClass">
        f
      </section>
    </div>

    <section v-show="false" class="flex justify-center flex-col items-center">
      <input type="text" ref="refInput">
      <p> <span class="cursor-pointer" @click="increment">click ref:</span> <span>{{ ary }}</span></p>
      <p> <span class="cursor-pointer" @click="incrementNum(3)">ref:</span> <span>{{ num }} 顶层：{{ ary.nested.count + 1 }}</span></p>
      <p> <span class="cursor-pointer" @click="icm">reactive:</span> <span>{{ obj }} 顶层：{{ obj.id }}</span></p>
      <p> <span class="cursor-pointer" @click="addBook">computed:</span> <span>{{ booksNum }}</span></p>

      <ul>
        <h3 class="text-green-800">Ul</h3>
        <li v-for="(value, key) in myObject" :key="key">{{ value }}->{{ key }}</li>

        <li class="h-0.5 w-full bg-slate-400"></li>

        <template v-for="item in myObject" :key="item">
          <li>{{ item }}</li>
          <li class="divider" role="presentation"></li>
        </template>

        <li class="h-0.5 w-full bg-slate-400"></li>

        <ul v-for="numbers in sets">
          <li v-for="n in even(numbers)">{{ n }}</li>
        </ul>
      </ul>

      <!-- 单击事件将停止传递 -->
      <a @click.stop="doThis">单击事件将停止传递:stop</a>

      <!-- 提交事件将不再重新加载页面 -->
      <form @submit.prevent="onSubmit">提交事件将不再重新加载页面:prevent</form>

      <!-- 修饰语可以使用链式书写 -->
      <a @click.stop.prevent="doThat">修饰语可以使用链式书写:click.stop.prevent</a>

      <!-- 也可以只有修饰符 -->
      <form @submit.prevent></form>

      <!-- 仅当 event.target 是元素本身时才会触发事件处理器 -->
      <!-- 例如：事件处理器不来自子元素 -->
      <div @click.self="doThat">例如：事件处理器不来自子元素</div>

      <p>Message is: {{ message }}</p>
      <input v-model="message" placeholder="edit me" />

      <div>Checked names: {{ checkedNames }}</div>

      <div>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack" class="ml-1 mr-8">Jack</label>

        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john" class="ml-1 mr-8">John</label>

        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike" class="ml-1 mr-8">Mike</label>
      </div>

      <div>Picked: {{ picked }}</div>

      <div>
        <input type="radio" id="one" value="One" v-model="picked" />
        <label for="one" class="ml-1 mr-8">One</label>

        <input type="radio" id="two" value="Two" v-model="picked" />
        <label for="two" class="ml-1 mr-8">Two</label>
      </div>

      <img class="w-72" src="https://cn.vuejs.org/assets/lifecycle.16e4c08e.png" alt="">
    </section>
  </div>
</template>

<script setup>
import TreeItem from './comps/TreeItem.vue'
import { ref, reactive, computed, onMounted, watch } from 'vue'
import Grid from './comps/Grid.vue'
// 使用 <script setup>
defineProps({
  title: String,
  likes: Number
})

const treeData = ref({
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'world' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        },
        { name: 'hello' },
        { name: 'world' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'world' }]
        }
      ]
    }
  ]
})

const sectionClass = ref(['p-4', 'mx-2', 'border-orange-500', 'w-1/5', 'h-full', 'border-2',])
let inputValue = ref('')
function queryGrid() {
  inputValue
}
let gridData = [
  { name: 'Chuck Norris', power: Infinity },
  { name: 'Bruce Lee', power: 9000 },
  { name: 'Jackie Chan', power: 7000 },
  { name: 'Jet Li', power: 8000 }
]

let columns = ['name', 'power']

const emit = defineEmits({
  changeTitle: (title => {
    title !== 'title'
  })
})

// const title = ref('Vue3')
const ary = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})
function increment() {
  ary.value.nested.count += 2
  ary.value.arr.push(3)

  emit('changeTitle', 'Vue Test API')
}
const num = ref(0)
function incrementNum(params) {
  num.value += params
}
const obj = reactive({ id: 3, arr: [1, 2] })
function icm() {
  obj.id += 2
}

const books = ref({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const booksNum = computed(() => {
  return books.value.books.length === 3 ? 'yes' : 'no'
})
function addBook() {
  books.value.books.push('Vue-5')
}

const myObject = reactive({
  title: 'How to do lists in Vue',
  author: 'Jane Doe',
  publishedAt: '2016-04-10'
})


const sets = ref([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
])

function even(numbers) {
  return numbers.filter((number) => number % 2 === 0)
}

let message = ref('j')

let checkedNames = ref(['Mike'])

let picked = ref('One')

const refInput = ref(null)
onMounted(() => {
  refInput.value.focus()
})
</script>

<style lang="scss" scoped>
</style>