<template>
  <div>Header</div>
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
.searchIcon {
  min-width: 28px !important;
  cursor: pointer;
}

.svgHeaderWidth12 {
  min-width: 12px !important;
  min-height: 32px;
  opacity: 0.5;
}

.svgHeaderWidth20 {
  min-width: 20px !important;
}

.deleteSearch:hover {
  cursor: pointer;
}

.open-menu {
  padding: 4px;
  max-height: 400px;
  overflow: auto;
  // background-color: #252525;
  background: linear-gradient(0deg, #00a1db 0%, #0068b4 100%);
}
</style>
