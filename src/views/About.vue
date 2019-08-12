<template>
  <div id="about">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="item">
            <div class="pic"></div>
            <div class="explain">
              您好，我叫陈岳斌，坐标长沙，90后胖boy一枚，是一名前端工程师（其实是枚小白）。
              <br />18年3月开始工作,目前就职于湖南通亮信息有限公司，负责公司前端页面的开发。配合后台
              <br />人员实现产品的效果与功能
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="item"></div>
        </div>
        <div class="swiper-slide">
          <div class="item"></div>
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";

export default {
  methods: {
    inits() {
      this.initSwiper();
      this.initBg();
    },
    initSwiper() {
      new Swiper(".swiper-container", {
        direction: "vertical",
        slidesPerView: 1,
        mousewheel: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    },
    initBg() {
      let slides = document.querySelectorAll(".swiper-slide");
      slides.forEach((el, index) => {
        console.log(1);
        el.style.background = `url(${require(`../static/images/about-${index +
          1}.jpg`)}) no-repeat 100%/100%`;
      });
    }
  },
  mounted() {
    this.inits();
  },
  beforeRouteEnter(to, from, next) {
    document.querySelector("#header").style.display = "none";
    next();
  },
  beforeRouteLeave(to, from, next) {
    document.querySelector("#header").style.display = "block";
    next();
  }
};
</script>

<style scoped>
#about {
  width: 100vw;
  height: 100vh;
}

.swiper-container {
  width: 100vw;
  height: 100vh;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-slide .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.swiper-slide .pic {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: url("../static/images/pic.jpg") no-repeat 100%/100%;
  cursor: pointer;
  margin-bottom: 25px;
}

.swiper-slide .pic:hover {
  box-shadow: 0.5px 0.5px 10px #888888;
}

.swiper-slide .explain {
  text-indent: 30px;
}
</style>
