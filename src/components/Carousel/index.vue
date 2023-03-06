<template>
  <div class="swiper-container" id="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide" v-for="carousel in List" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.css';

export default {
  name: "Carousel",
  props:['List'],
  watch:{
    List:{
        immediate:true,
        handler(){
            this.$nextTick(() => {
            const swiper = new Swiper('.swiper-container', {
                // Optional parameters
                loop: true,

                // If we need pagination
                pagination: {
                el: ".swiper-pagination",
                clickable:true
                },

                // Navigation arrows
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
                // And if we need scrollbar
                scrollbar: {
                el: ".swiper-scrollbar",
                },
            });
            });
        }
    }
  }
};
</script>

<style>
</style>