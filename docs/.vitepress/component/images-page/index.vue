<template>
  <div class="relative">
    <div class="relative w-full flex flex-col justify-start items-center ">
      <div class="w-full text-xl font-bold text-center mx-auto">Cain's Collections</div>
      <!-- <div class="mx-4 text-base">Record some moment</div> -->
      <div class="m-8 w-5/6  h-px bg-slate-300"></div>
    </div>
    <!-- <div class="relative h-[300px] m-4" v-for="(item) in imgs" :key="item">
      <div v-for="(img, index) in item" :key="index">
        <img :style="{'width':img.w + 'px'}" class="rounded-sm" :src="item.url" alt="">
        <span class="absolute bottom-4 left-5 text-lg opacity-0 hover:opacity-100 transition-opacity">{{item.name}}</span>
      </div>

    </div> -->
    <div ref="wrapper" class="wrapper w-5/6 min-h-screen m-auto flex flex-wrap justify-between after:flex-1">
      <div class="relative h-[250px] m-4" v-for="(item) in imgs" :key="item">
        <!-- justify-content对齐问题描述：最后一行的列表的个数不满，则就会出现最后一行没有完全垂直对齐的问题。
        如果每一行列数是固定的 中间的gap间隙我们使用margin进行控制或动态计算
        如果行数不固定，
        最后一项margin-right:auto 或
        父元素使用伪元素辅助左对齐
                  .container::after {
                      content: '';
                      flex: auto;    /* 或者flex: 1 */
                  }
         -->
        <img :style="{'width':item.w + 'px'}" class="rounded-sm" :src="item.url" alt="">
        <span class="absolute bottom-4 left-5 text-lg opacity-0 hover:opacity-100 transition-opacity">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { images } from "./images.js";
import { ref, reactive, onMounted } from 'vue'
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    /**
     * 瀑布流
     * 懒加载防抖监听滚动事件，渲染图片
     * 
     * 基准高度 = 缩放后的总宽度 / 缩放前的总宽度 * 原图高度
     * 高度的缩放比 = 基准高度 / 原图高度
     * 缩放后的宽度 = 高度的缩放比 * 原图宽度
     */
    const imgs = reactive([])
    images.forEach(item => {
      let { width, height } = getRange(item.url)
      let a = 200 / height
      item.w = a * width
      imgs.push(item)
    })

    function getRange(url) {
      let img = new Image();
      img.src = url;
      return {
        width: img.width,
        height: img.height
      }
    }


    const allImages = reactive([])
    const testImgs = reactive(images)
    onMounted(() => {
      const wrapper = document.querySelector('.wrapper')
      const wrapperWidth = wrapper.getBoundingClientRect().width
      let rowImgs = [], rowWidth = 0
      for (let index = 0; index < testImgs.length - 1; index++) {
        const image = testImgs[index];
        let { width, height } = getRange(image.url)
        image.orginWidth = width
        image.originHeight = height
        rowWidth += width
        if (rowWidth > wrapperWidth) {
          break;
        } else {
          rowImgs.push(image)
        }
      }

      allImages.push(rowImgs)
      console.log(rowImgs, '-____-----');

      // while (testImgs.length !== 0) {
      //   rowWidth = 0
      //   index = 0
      //   rowImgs = []
      //   for (; index < testImgs.length - 1; index++) {
      //     const image = testImgs[index];
      //     let { width, height } = getRange(image.url)
      //     image.orginWidth = width
      //     image.originHeight = height
      //     rowWidth += width
      //     if (rowWidth > wrapperWidth) {
      //       break;
      //     } else {
      //       rowImgs.push(image)
      //     }
      //   }
      // testImgs.splice(0, index - 1)
      // allImages.push(rowImgs)
      // console.log(rowImgs, '-____-----', index);
      // }
    })



    return {
      imgs,
      getRange,
      // wrapper
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
    };
  },
});
</script>



