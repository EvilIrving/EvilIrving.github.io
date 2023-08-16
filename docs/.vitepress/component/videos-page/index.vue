<!-- Template 代码和 Vue 2 一样 -->
<template>
  <div class="bg-white">
    <h2 class="text-2xl font-bold text-gray-900 flex items-center justify-center">Collections</h2>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.id" :href="product.href" class="group">
          <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
            <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center group-hover:opacity-75" />
          </div>
          <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">{{ product.price }}</p>
        </a>
      </div>
    </div>
  </div>

</template>
  
  <!-- Script 代码需要使用 Vue 3 的新写法-->
<script lang="ts">
// Vue 3 的 API 需要导入才能使用
import { defineComponent } from "vue";

// 使用 `defineComponent` 包裹组件代码
// 即可获得完善的 TypeScript 类型推导支持
export default defineComponent({
  setup() {
    // 在 `setup` 方法里声明变量
    const products = [
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
      {
        id: 1,
        name: "Earthen Bottle",
        href: "#",
        price: "$48",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt:
          "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
      },
      {
        id: 2,
        name: "Nomad Tumbler",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt:
          "Olive drab green insulated bottle with flared screw lid and flat top.",
      },
      {
        id: 3,
        name: "Focus Paper Refill",
        href: "#",
        price: "$89",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt:
          "Person using a pen to cross a task off a productivity paper card.",
      },
      {
        id: 4,
        name: "Machined Mechanical Pencil",
        href: "#",
        price: "$35",
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
        imageAlt:
          "Hand holding black machined steel mechanical pencil with brass tip and top.",
      },
    ];

    // 将需要在 `<template />` 里使用的变量 `return` 出去
    return {
      products,
    };
  },
});
</script>
  
  <!-- CSS 代码和 Vue 2 一样 -->
<style scoped>
.video-list-wrapper {
}
.msg {
  font-size: 14px;
}
</style>