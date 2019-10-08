<template>
  <div class="app">
    <HeaderBar></HeaderBar>
    <Breadcrumbs></Breadcrumbs>
    <router-view></router-view>
  </div>
</template>

<script>
import { database } from '@/core/database';
import HeaderBar from '../components/header';
import Breadcrumbs from '../components/breadcrumbs';

export default {
  name: 'main-layout',

  components: {
    HeaderBar,
    Breadcrumbs
  },

  data: () => {
    return {
      drawer: false
    };
  },

  firebase: {
    items: database.ref('collaborativeTools'),
    itemsObj: {
      source: database.ref('collaborativeTools'),
      asObject: true
    }
  },

  created() {},

  mounted() {
    console.log('items', this.items);
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