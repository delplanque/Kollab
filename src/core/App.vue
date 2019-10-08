<template>
  <div class="app">
    <HeaderBar></HeaderBar>
    <Breadcrumbs></Breadcrumbs>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from '../components/header';
import { database } from "@/core/database";
import Breadcrumbs from '../components/breadcrumbs';
// import navDrawer from "../components/navDrawer";

export default {
  name: 'main-layout',

  components: {
    HeaderBar,
    Breadcrumbs
    // navDrawer
  },

  data: () => {
    return {
      drawer: false
    };
  },

  /*firebase: {
    items: database.ref('collaborativeTools'),
    itemsObj: {
      source: database.ref('collaborativeTools'),
      asObject: true
    }
  },*/

  mounted() {},
  created() {
    console.log(database.ref('collaborativeTools'))
  },
  methods: {
    openNav(value) {
      this.drawer = value;
    }
  }
};
</script>


<style lang="scss" scoped>
.app {
  width: 100%;
}
</style>