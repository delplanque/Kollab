<template>
  <div class="main-layout">
    <!-- <main-header :drawer="drawer" @openNav="openNav"></main-header> -->
    <router-view></router-view>
    <!-- <nav-drawer :drawer="drawer"></nav-drawer> -->
  </div>
</template>

<script>
// import mainHeader from "../components/header";
// import navDrawer from "../components/navDrawer";

export default {
  name: "main-layout",

  components: {
    // mainHeader,
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