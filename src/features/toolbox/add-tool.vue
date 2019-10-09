<template>
  <section class="add-tool">
    <div @click="tooglePopin()" class="add-tool__add" :class="{ active: isPopin }">+</div>
    <div class="overlay" @click="tooglePopin()" :class="{ active: isPopin }"></div>
    <div class="add-tool__popin" :class="{ active: isPopin }">popin</div>
  </section>
</template>

<script>
import { database } from '@/core/database';

export default {
  name: 'add-tool',

  props: {
    personnalTools: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isPopin: false,
      itemToPush: {
        name: 'visual',
        link: 'visualLink'
      }
    };
  },

  created() {},

  components: {},

  computed: {},

  mounted() {},

  methods: {
    tooglePopin() {
      this.isPopin = !this.isPopin;
    },

    addTool() {
      database.ref(this.personnalTools).push(this.itemToPush);
    }
  }
};
</script>


<style scoped lang="scss">
.add-tool {
  &__add {
    background-color: darken(#303f9f, 10%);
    border-radius: 100%;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    transition: all 200ms ease-out;
    &.active {
      transform: rotate(135deg);
    }
  }

  &__popin {
    position: fixed;
    left: 0;
    bottom: -30px;
    width: 100vw;
    height: 300px;
    background-color: #fff;
    transform: translateY(300px);
    transition: all 200ms ease-out;
    padding: 15px;

    &.active {
      transform: translateY(0px);
    }
  }
}
</style>