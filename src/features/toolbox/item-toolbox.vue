<template>
  <div class="item-toolbox">
    <div class="item-toolbox__title">
      <img class="item-toolbox__icon" :src="data.link+'favicon.ico'">
      <a :href="data.link">{{data.name.charAt(0).toUpperCase() + data.name.slice(1) }}</a>
      <button v-if="bin" class="item-toolbox__button-delete"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-toolbox',

  props: {
    data: {default: null},
    bin: {type: Boolean, default: false}
  },

  data() {
    return {};
  },

  created() {},

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>


<style scoped lang="scss">
.item-toolbox {
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  background-color: #fff;
  box-sizing: border-box;
  padding: 1em;
  margin: 1em;

  &__title a {
    font-size: 1.25em;
    text-decoration: none;
    color: #000;

    &:first-letter {
      text-transform: uppercase;
    }
  }
  
  &__icon {
    width: 23px;
    height: auto;
    vertical-align: -5px;
    margin-right: 10px;
  }

  &__button-delete {
    float: right;
    width: 23px;
    height: 23px;
    background-color: transparent;
    background-size: 100%;
    background: url('/assets/icons/delete_outline-24px.svg') no-repeat;
    border: 0;
    cursor: pointer;
  }
}
</style>