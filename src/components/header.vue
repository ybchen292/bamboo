<template>
  <div class="header">
    <div class="content">
      <h1>C</h1>
      <h7>问你有几度</h7>
    </div>
    <span>MENU</span>
    <div class="menu">
      <ul>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
        <li>测试</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scope>
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
.header span {
  display: inline-block;
  position: absolute;
  top: 2%;
  left: 1%;
  padding: 5px 10px;
  border: 1px solid #ffffff;
  border-radius: 20px;
  background-color: #000000;
}
.header .menu {
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
}
</style>