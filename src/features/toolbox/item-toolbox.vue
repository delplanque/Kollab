<template>
  <div class="item-toolbox">
    <div class="item-toolbox__title">
      <img class="item-toolbox__icon" src="https://www.adobe.com/content/dam/cc/icons/photoshop.svg">
      <a href="#">Photoshop</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-toolbox',

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
  }
  
  &__icon {
    width: 23px;
    height: auto;
    vertical-align: -5px;
    margin-right: 10px;
  }
}
</style>