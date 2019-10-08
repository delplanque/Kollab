<template>
  <!-- <v-navigation-drawer
    v-model="showDrawer"
    absolute
    temporary
    right
    color="#303F9F"
    >
    <v-avatar>
      <img src="https://randomuser.me/api/portraits/men/84.jpg">
    </v-avatar>
  </v-navigation-drawer>-->
  <div></div>
</template>

<script>
export default {
  name: "header-bar",
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data: () => {
    return {};
  },
  computed: {
    showDrawer() {
      return this.drawer;
    }
  },
  watch: {},
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
</style>
