<template>
  <section class="add-tool">add-tool</section>
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
    addTool() {
      database.ref(this.personnalTools).push(this.itemToPush);
    }
  }
};
</script>


<style scoped lang="scss">
.add-tool {
  // background-color: #fff;
}
</style>