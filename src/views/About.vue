<template>
  <div id="about">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="slide-bg"></div>
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
          <div class="slide-bg"></div>
          <div class="item">
            <div id="skills" style="width: 600px;height:400px;"></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-bg"></div>
          <div class="item">
            <div class="c-grow">
              <div class="c-lt">
                <div class="c-lt-top">
                  <span>我的经历</span>
                  <div class="c-lt-circle">2018</div>
                </div>
                <ul class="c-lt-ul">
                  <li class="c-lt-li">
                    <small>2018</small>
                    <span>03</span>
                    <i></i>
                  </li>
                  <li class="c-lt-li">
                    <small>2018</small>
                    <span>03</span>
                    <i></i>
                  </li>
                </ul>
              </div>
              <!-- TODO;-->
              <div class="c-rt">
                <ul class="c-rt-ul">
                  <li class="c-rt-li">
                    <h3>湖南楚越科技有限公司</h3>
                    <h4>技术部，前端开发</h4>
                    <p>负责PLM系统中子模块开发，页面编写，页面交互，动画效果，等。</p>
                    <p>用到技术有:HTML,CSS,JS,Extjs,Jquery</p>
                  </li>
                  <li class="c-rt-li">
                    <h3>湖南通亮信息有限公司</h3>
                    <h4>技术部，前端开发</h4>
                    <p>负责PLM系统中子模块开发，页面编写，页面交互，动画效果，等。</p>
                    <p>用到技术有:HTML,CSS,JS,Extjs,Jquery</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="slide-bg"></div>
        </div>
      </div>

      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import Echarts from "echarts";

export default {
  methods: {
    inits() {
      this.initSwiper();
      this.initBg();
      this.initEcharts();
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
    initEcharts() {
      Echarts.init(document.getElementById("skills")).setOption({
        title: {
          text: "Skills",
          x: "center"
        },
        color: [
          "#c23531",
          "#2f4554",
          "#6666FF",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ],
        series: [
          {
            type: "pie",
            data: [
              { value: 500, name: "Jquery" },
              { value: 350, name: "HTML" },
              { value: 300, name: "CSS" },
              { value: 280, name: "Vue" },
              { value: 100, name: "Ext" }
            ]
          }
        ]
      });
    },
    initBg() {
      let slides = document.querySelectorAll(".slide-bg");
      slides.forEach((el, index) => {
        el.style.background = `url(${require(`../static/images/about-${index +
          1}.png`)}) no-repeat 100%/100%`;
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
  color: #fff;
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

.slide-bg {
  z-index: -100;
  filter: grayscale(100%);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
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

.c-grow {
  display: flex;
}

.c-grow .c-lt {
  width: 200px;
}

.c-grow .c-lt-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-grow .c-lt-circle {
  width: 80px;
  height: 80px;
  border: 6px solid #d7d8d8;
  border-radius: 50%;
  color: green;
  font-size: 24px;
  line-height: 80px;
  text-align: center;
}

.c-grow .c-lt-ul {
  border-right: 8px solid #d7d8d8;
  height: 250px;
  margin-right: 42px;
}

.c-grow .c-lt-li {
  position: relative;
  padding-top: 50px;
  padding-left: 30px;
  display: flex;
  align-items: center;
}

.c-grow .c-lt-li:not(:nth-child(1)) {
  padding-top: 80px;
}
.c-grow .c-lt-li i {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: green;
  position: absolute;
  border-radius: 50%;
  right: -12px;
}
.c-grow .c-lt-li i::before {
  content: "";
  display: inline-block;
  width: 16px;
  height: 2px;
  background-color: green;
  position: absolute;
  left: -16px;
  top: 50%;
  transform: translateY(-50%);
}
.c-grow .c-lt-li span {
  margin-left: 30px;
}

.c-grow .c-lt-top span {
  color: yellow;
  font-weight: bold;
  font-size: 20px;
}

.c-grow .c-rt-ul {
  margin-top: 110px;
}
.c-grow .c-rt-li {
  margin-bottom: 40px;
}

.c-grow .c-rt-li p {
  font-size: 14px;
  color: #000;
}

.c-grow .c-rt-li h3,
.c-grow .c-rt-li h4 {
  color: #000;
}
.c-grow li small,
.c-grow li span {
  color: yellow;
  font-weight: 500;
  font-size: 16px;
}
/* TODO; */
</style>
