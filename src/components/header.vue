<template>
  <v-app-bar
      color="#303F9F"
      dense
      dark>
    <v-layout>
      <v-flex md11>
      </v-flex>
      <v-flex>
        <v-app-bar-nav-icon @click.stop="isDrawer" ></v-app-bar-nav-icon>
      </v-flex>
    </v-layout>
  </v-app-bar>
</template>

<script>


export default {
  name: 'header-bar',
  data: () => {
    return {
      drawer : null
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    isDrawer () {
      this.drawer = !this.drawer
      this.$emit('openNav', this.drawer)
    }
  }
}
</script>

<style scoped lang="scss">

.searchIcon {
  min-width: 28px !important;
  cursor: pointer;
}

.svgHeaderWidth12{
  min-width: 12px !important;
  min-height: 32px;
  opacity: 0.5;
}

.svgHeaderWidth20{
   min-width: 20px !important;
}

.deleteSearch:hover{
  cursor: pointer;
}

.open-menu {
  padding: 4px;
  max-height: 400px;
  overflow: auto;
  // background-color: #252525;
  background: linear-gradient(0deg, #00A1DB 0%, #0068B4 100%);
}

</style>
