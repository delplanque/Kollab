<template>
  <section class="toolbox">
    <ul class="toolbox__onglet container">
      <li
        :class="{ active: isActive('collaboratif') }"
        @click="changeTab('collaboratif')"
      >Collaboratifs</li>
      <li :class="{ active: isActive('officiel') }" @click="changeTab('officiel')">Officiels</li>
      <li :class="{ active: isActive('add') }" @click="changeTab('add')">Mes Ajouts</li>
    </ul>
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
      tabactive: 'collaboratif',
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

  methods: {
    changeTab(tab) {
      this.tabactive = tab;
    },

    isActive(tab) {
      return this.tabactive === tab;
    }
  }
};
</script>


<style scoped lang="scss">
.toolbox {
  padding-top: 50px;

  &__onglet {
    display: flex;

    li {
      border-bottom: 2px solid transparent;
      padding: 10px;
      cursor: pointer;
      margin: 0 20px 0 0;
      font-size: 16px;
      text-align: center;
      color: #666;

      &.active {
        border-bottom: 2px solid #4caf50;
        color: #4caf50;
      }
    }
  }
  &__content {
    min-height: 600px;
    background-color: #f6f6f6;
  }
}
</style>