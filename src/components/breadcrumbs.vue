<template>
  <div class="breadcrumbs">
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">Bienvenue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-bar',
  props: {},
  data: () => {
    return {
      showDrawer: null
    };
  },
  computed: {},

  watch: {},

  created() {},

  methods: {}
};
</script>

<style scoped lang="scss">
.breadcrumbs {
  ul {
    display: flex;
    & > li {
      a {
        text-decoration: none;
        &:after {
          content: "";
          display: inline-block;
          background: url("/assets/icons/keyboard_arrow_right-24px.svg") no-repeat;
          width: 20px;
          height: 20px;
          margin: 0 8px;
        }
      }
    }
  }
}
</style>
