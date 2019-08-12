<template>
  <div id="header">
    <div class="content">
      <!-- <h1>C</h1> -->
      <h1>海内存知己 天涯若比邻</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
#header {
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url("../static/images/header.jpg");
  background-size: cover;
  background-position: center;
}

#header .content {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

@keyframes mymove {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}

#header .content h1 {
  color: transparent;
  background-clip: text;
  background-size: 200% 100%;
  animation: mymove 3s infinite linear;
  background-image: linear-gradient(
    left,
    #3498db,
    #f47920 10%,
    #d71345 20%,
    #f7acbc 30%,
    #ffd400 40%,
    #3498db 50%,
    #f47920 60%,
    #d71345 70%,
    #f7acbc 80%,
    #ffd400 90%,
    #3498db
  );
}
</style>