<template>
  <div class="home">
    <headers />
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import headers from "@/components/header.vue";

export default {
  name: "home",
  components: {
    headers
  }
};
</script>
