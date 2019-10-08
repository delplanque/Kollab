<template>
  <section class="toolbox">
    <ul class="toolbox__onglet container" id="changeTabs">
      <li id="collaborativeTools" :class="{ active: isActive('collaborativeTools') }">Collaboratifs</li>
      <li id="officialTools" :class="{ active: isActive('officialTools') }">Officiels</li>
      <li id="personnalTools" :class="{ active: isActive('personnalTools') }">Mes Ajouts</li>
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
import ItemToolbox from './item-toolbox';
import { fromEvent } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';

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

  mounted() {
    const test$ = fromEvent(
      document.querySelector('#changeTabs'),
      'click'
    ).pipe(
      pluck('target', 'id'),
      tap(id => console.log(id))
    );
    test$.subscribe();
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