<template>
  <div class="header">
    <div class="header__container">Header</div>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  },
  data: () => {
    return {
      showDrawer: null
    };
  },
  computed: {},
  watch: {},
  created() {
    this.showDrawer = this.drawer;
  },
  methods: {
    isDrawer() {
      this.showDrawer = !this.showDrawer;
      console.log(this.showDrawer);
      this.$emit('openNav', this.showDrawer);
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background-color: #303f9f;
  padding: 20px 15px;

  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
