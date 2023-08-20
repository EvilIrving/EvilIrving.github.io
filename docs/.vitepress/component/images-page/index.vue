<template>
  <div class="relative">
    <div class="relative w-full flex flex-col justify-start items-center ">
      <div class="w-full text-xl font-bold text-center mx-auto">Cain's Collections</div>
      <div class="m-8 w-5/6  h-px bg-slate-300"></div>
    </div>
    <div ref="wrapper" class="wrapper w-5/6 min-h-screen m-auto ">
      <div class="relative h-[200px] m-2 inline-block cursor-pointer" v-viewer @mouseover="showText(item)" @mouseleave="hideText" v-for="(item) in imgs" :key="item">
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
        <img :style="{'width':item.w + 'px'}" class="rounded-md hover:scale-105 hover:transition-all hover:duration-500 duration-500" :src="item.url" alt="">
        <span v-show="item.show" class="absolute bottom-4 left-5 text-lg">{{item.name}}</span>
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
     * 
     */
    const imgs = reactive([])
    images.forEach(item => {
      let { width, height } = getRange(item.url)
      let a = 200 / height
      item.w = a * width
      item.show = false
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

    function showText(item) {
      imgs.map(img => img.url === item.url ? img.show = true : img.show = false)
    }
    function hideText() {
      imgs.map(img => img.show = false)
    }


    const allImages = reactive([])
    const testImgs = reactive(images)
    onMounted(() => {
      // const wrapper = document.querySelector('.wrapper')
      // const wrapperWidth = wrapper.getBoundingClientRect().width

      // for (let index = 0; index < images.length; index += 2) {
      //   let rowWidth = 0, rowNum = 0
      //   let rowImgs = [images[index], images[index++], images[index++]]

      //   rowImgs.forEach(rowImg => {
      //     let { width, height } = getRange(rowImg.url)
      //     rowWidth += width
      //   })

      //   let h  = wrapperWidth / rowWidth * 300



      // }


      // console.log(allImages, '-____-----');

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
      showText,
      hideText,
      // wrapper
      // 需要给 `<template />` 用的数据或函数，在这里 `return` 出去
    };
  },
});
</script>



