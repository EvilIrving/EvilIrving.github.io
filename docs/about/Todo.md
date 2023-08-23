---
layout: page
---

<script setup>
import {ref} from 'vue'
let title = ref('Vue API')
function titleChanged(name){
    title.value = name
}
</script>

<vue3-api :title='title' @change-title='titleChanged'></vue3-api>
