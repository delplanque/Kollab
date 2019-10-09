<template>
  <div class="breadcrumbs container">
    <ul>
      <li>
        <a href="#">Accueil</a>
      </li>
      <li>
        <a href="#">Bienvenue</a>
      </li>
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
  padding: 15px 0;
  ul {
    display: flex;

    li {
      a {
        text-decoration: none;
        color: #666666;
        font-size: 0.9em;

        &:after {
          content: '';
          display: inline-block;
          background: url('/assets/icons/keyboard_arrow_right-24px.svg')
            no-repeat;
          background-size: 100%;
          width: 16px;
          height: 16px;
          margin: 0 8px;
          vertical-align: -3px;
        }
      }

      &:last-child a:after {
        display: none;
      }
    }
  }
}
</style>
