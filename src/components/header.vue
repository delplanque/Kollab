<template>
  <div class="header">
    <div class="header__container container">
      <img src="/assets/kollab.png" alt />
      <button class="header__menu" @click="toogleMenu()">
        <!-- prettier-ignore -->
        <svg height="50" viewBox="0 0 374.706 374.706" width="50">
          <path
            id="path-1_59_"
            d="m80.294 53.529h294.412v53.529h-294.412z"
            transform="translate(4 3)"
          />
          <path d="m80.294 160.588h267.647v53.529h-267.647z" />
          <path
            id="path-1_58_"
            d="m80.294 267.647h294.412v53.529h-294.412z"
            transform="translate(4 11)"
          />
          <path id="path-2_11_" d="m0 53.529h53.529v53.529h-53.529z" transform="translate(1 3)" />
          <path id="path-2_10_" d="m0 160.588h53.529v53.529h-53.529z" transform="translate(1 7)" />
          <path id="path-2_9_" d="m0 267.647h53.529v53.529h-53.529z" transform="translate(1 11)" />
        </svg>
      </button>
    </div>

    <div class="overlay" @click="toogleMenu()" :class="{ active: isMenu }"></div>

    <div class="header__tab" :class="{ active: isMenu }">
      <button class="header__close" @click="toogleMenu()">
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 32.526 32.526"
          style="enable-background:new 0 0 32.526 32.526;"
          xml:space="preserve"
        >
          <polygon
            points="32.526,2.828 29.698,0 16.263,13.435 2.828,0 0,2.828 13.435,16.263 0,29.698 2.828,32.526 16.263,19.091 
	29.698,32.526 32.526,29.698 19.091,16.263 "
          />
          <g />
        </svg>
      </button>
      <ul class="header__list">
        <li class="header__item">Accueil</li>
        <li class="header__item">Equipes</li>
        <li class="header__item">Boite à outils</li>
        <li class="header__item">Actualités</li>
        <li class="header__item">A propos</li>
        <li class="header__item">Applications externes</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-bar',

  data: () => {
    return {
      isMenu: false
    };
  },

  computed: {},

  watch: {},

  created() {},

  methods: {
    toogleMenu() {
      this.isMenu = !this.isMenu;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  background-color: #303f9f;
  padding: 10px 15px;

  &__container {
    display: flex;
    justify-content: space-between;
  }

  img {
    width: auto;
    max-height: 50px;
  }

  &__tab {
    position: fixed;
    z-index: 1000;
    width: 320px;
    top: 0;
    right: 0;
    transform: translateX(320px);
    background-color: darken(#303f9f, 10%);
    height: 100vh;
    transition: all 200ms ease-out;

    &.active {
      transform: translateX(0px);
    }
  }

  &__list {
    margin: 50px 0 0 0;
    padding: 15px;
    list-style: none;
  }

  &__item {
    color: #fff;
    padding: 15px 0;
    border-bottom: 1px solid rgba(#fff, 0.3);
  }

  &__menu,
  &__close {
    padding: 5px;
    appearance: none;
    background-color: transparent;
    border: 0;
    outline: none;
    cursor: pointer;

    svg {
      fill: #fff;
      width: 30px;
      height: 30px;
    }
  }

  &__close {
    padding-top: 20px;
    position: absolute;
    right: 15px;
    transform: scale(0.7);
  }
}
</style>
