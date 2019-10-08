<template>
  <div class="main-layout">
    <HeaderBar></HeaderBar>
    <!-- <main-header :drawer="drawer" @openNav="openNav"></main-header> -->
    <router-view></router-view>
    <!-- <nav-drawer :drawer="drawer"></nav-drawer> -->
  </div>
</template>

<script>
import HeaderBar from '../components/header';
// import navDrawer from "../components/navDrawer";

export default {
  name: 'main-layout',

  components: {
    HeaderBar
    // navDrawer
  },

  data: () => {
    return {
      drawer: false
    };
  },

  mounted() {},
  created() {},
  methods: {
    openNav(value) {
      this.drawer = value;
    }
  }
};
</script>


<style lang="css" scoped>
.main-layout {
  height: 100%;
  width: 100%;
}
</style>