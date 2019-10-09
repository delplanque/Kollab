<template>
  <section class="toolbox">
    <ul class="toolbox__onglet container" id="changeTabs">
      <li id="collaborativeTools" :class="{ active: isActive('collaborativeTools') }">Collaboratifs</li>
      <li id="officialTools" :class="{ active: isActive('officialTools') }">Officiels</li>
      <li id="personnalTools" :class="{ active: isActive('personnalTools') }">Mes ajouts</li>
    </ul>

    <div class="toolbox__content">
      <div class="container">
        <ul class="toolbox__list">
          <li v-for="(item, index) in toolbox" v-bind:key="index">
            <ItemToolbox 
            :data="item"
            :bin="isActive('personnalTools')"
            ></ItemToolbox>
          </li>
        </ul>
      </div>
    </div>
    <AddTool :personnalTools="tabactive" v-if="isActive('personnalTools')"></AddTool>
  </section>
</template>

<script>
import ItemToolbox from './item-toolbox';
import AddTool from './add-tool';
import { fromEvent } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import { database } from '@/core/database';

export default {
  name: 'toolbox',

  data() {
    return {
      getToolbox$: null,
      tabactive: 'collaborativeTools',
      toolbox: []
    };
  },

  created() {},

  components: {
    ItemToolbox,
    AddTool
  },

  computed: {},

  mounted() {
    this.$bindAsArray('toolbox', database.ref(this.tabactive));
    this.getToolbox$ = fromEvent(
      document.querySelector('#changeTabs'),
      'click'
    ).pipe(
      pluck('target', 'id'),
      tap(id => (this.tabactive = id)),
      tap(id => this.$bindAsArray('toolbox', database.ref(id)))
    );
    this.getToolbox$.subscribe();
  },

  destroyed() {
    this.getToolbox$.unsubscribe();
  },

  methods: {
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
      display: flex;

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

  &__list {
    display: flex;
    flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    padding-top: 2em;

    li {
      width: 33.333%;
      @media (max-width: 420px) {
        width: 100%
      }
    }
  }
}
</style>