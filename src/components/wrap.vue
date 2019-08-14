<template>
  <div id="wrap">
    <ul>
      <li v-for="item in items" :style="item.imgurl">
        <h3>{{item.title}}</h3>
        <p>别点，还没写</p>
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
          title: "点我",
          imgurl: {
            background:
              "url(" +
              require("../static/images/1.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "点我",
          imgurl: {
            background:
              "url(" +
              require("../static/images/2.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "点我",
          imgurl: {
            background:
              "url(" +
              require("../static/images/3.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "点我",
          imgurl: {
            background:
              "url(" +
              require("../static/images/4.jpg") +
              ") no-repeat 100%/100%"
          }
        },
        {
          title: "点我",
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
  color: #fff;
}

#wrap ul li {
  margin-top: 30px;
  height: 250px;
  margin-bottom: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2;
}

#wrap ul li:hover {
  transform: scale(1.05, 1.05);
}
</style>
