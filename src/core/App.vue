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
      drawer: false,
      collaborative: [],
      itemToPush: {
        name: 'visual',
        link: 'visualLink'
      },
      t: 'collaborativeTools'
    };
  },


  created() {
    this.$bindAsArray('collaborative', database.ref(this.t))
    //database.ref(this.t).push(this.itemToPush)
    //database.ref(this.t).child(this.collaborative[2]['.key']).remove() 
    console.log('items', this.collaborative);
  },
  mounted() {
    //console.log('items', this.items);
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