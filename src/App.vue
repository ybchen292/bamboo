<template>
  <div id="app" :style="{left:appL+'px'}">
    <headers />
    <div>
      <span @click="menuCK" class="menutext" :style="menutext">MENU</span>
      <div class="menu" :style="{left:menuL+'px'}">
        <ul>
          <li>
            <div class="imgPic"></div>
          </li>
          <li>
            <router-link to="/wrap">首页</router-link>
          </li>
          <li>
            <router-link to="/about">文章分类</router-link>
          </li>
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <footers />
  </div>
</template>

<script>
import headers from "@/components/header.vue";
import wrap from "@/components/wrap.vue";
import footers from "@/components/footer.vue";
export default {
  data() {
    return {
      appL: 0,
      menuL: -200,
      menutext: {
        left: "1%",
        backgroundColor: "#000",
        color: "#fff"
      }
    };
  },
  methods: {
    menuCK: function() {
      this.appL === 0
        ? ((this.appL = 200),
          (this.menuL = 0),
          (this.menutext = {
            left: "9%",
            backgroundColor: "#fff",
            color: "#000"
          }))
        : ((this.appL = 0),
          (this.menuL = -200),
          (this.menutext = {
            left: "1%",
            backgroundColor: "#000",
            color: "#fff"
          }));
    }
  },

  components: {
    headers,
    wrap,
    footers
  }
};
</script>

<style>
#app {
  height: auto;
  position: relative;
  transition: all 0.3s;
  background-color: #2c2a2a;
  overflow: hidden;
}
#app .menutext {
  display: inline-block;
  position: fixed;
  top: 1%;
  padding: 5px 15px;
  border: 1px solid #ffffff;
  border-radius: 20px;
  background-color: #2c2a2a;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.3s;
  z-index: 100;
}
#app .menu {
  position: fixed;
  bottom: 0;
  top: 0;
  background-color: #191919;
  width: 200px;
  transition: all 0.3s;
}

#app .menu li {
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}

#app .menu li a {
  display: inline-block;
  width: 100%;
  height: 100%;
}

#app .menu li:hover {
  background-color: #2c2a2a;
}

#app .menu li:nth-child(1) {
  margin-top: 30px;
}
#app .menu li:nth-child(2) {
  margin-top: 70px;
}
#app .menu .imgPic {
  position: relative;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: url("./static/images/pic.jpg") no-repeat 100%/100%;
  left: 50%;
  transform: translateX(-50%);
}
</style>