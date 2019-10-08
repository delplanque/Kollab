<template>
  <section class="toolbox">
    <div class="toolbox__onglet container">aef</div>
    <div class="toolbox__content">
      <div class="container">
        <div class="toolbox__list">
          <ItemToolbox></ItemToolbox>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import Vue from 'vue';
import ItemToolbox from './item-toolbox';

export default {
  name: 'toolbox',

  data() {
    return {
      toolbox: [
        {
          name: '1',
          link: '1'
        },
        {
          name: '2',
          link: '1'
        }
      ]
    };
  },

  created() {},

  components: {
    ItemToolbox
  },

  computed: {},

  mounted() {},

  methods: {}
};
</script>


<style scoped lang="scss">
.toolbox {
  &__onglet {
  }
  &__content {
    background-color: #f6f6f6;
  }
}
</style>