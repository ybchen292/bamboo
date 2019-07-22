<template>
  <div class="header">
    <div class="content">
      <h1>C</h1>
      <h6>问你有几度</h6>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerL: 0,
      menuL: -200
    };
  },
  methods: {
    menuCK: function() {
      this.headerL === 0
        ? ((this.headerL = 200), (this.menuL = 0))
        : ((this.headerL = 0), (this.menuL = -200));
    }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 600px;
  background-image: url("../static/images/header.jpg");
  background-size: cover;
  background-position: center;
}

.header .content {
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>