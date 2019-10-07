<template>
  <div class="main-layout">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>

import mainHeader from '../components/header'

export default {
  name: "main-layout",

  components: {
    mainHeader
  },

  mounted() {},

  methods: {}
};
</script>


<style lang="css" scoped>
  .main-layout {
    height: 100%;
    width: 100%;
  }
</style>