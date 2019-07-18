<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{a}}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      a: "545"
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
