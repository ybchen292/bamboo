<template>
  <div id="wrap">
    <ul>
      <li v-for="item in items">
        <div :style="item.imgurl">
          <h3>{{item.title}}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "测试1",
          imgurl: {
            background:
              "url(" +
              require("../static/images/1.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "测试1",
          imgurl: {
            background:
              "url(" +
              require("../static/images/2.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "测试1",
          imgurl: {
            background:
              "url(" +
              require("../static/images/3.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "测试1",
          imgurl: {
            background:
              "url(" +
              require("../static/images/4.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "测试1",
          imgurl: {
            background:
              "url(" +
              require("../static/images/5.jpg") +
              ") no-repeat 100%/100%"
          }
        }
      ]
    };
  }
};
</script>

<style scoped>
#wrap {
  width: 50%;
  margin: auto;
}

#wrap ul li {
  margin-top: 30px;
  height: 250px;
  margin-bottom: 20px;
}

#wrap ul li div {
  height: 100%;
  cursor: pointer;
}

#wrap ul li div:hover {
  transform: scale(1.05, 1.05);
}
</style>
