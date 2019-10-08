<template>
  <section>
    <div >
      <h1>Kollab</h1>
    </div>
  </section>
</template>

<script>
import Vue from "vue";

export default {
  name: "home",

  data() {
    return {
      drawer: null,
      imageNasa: '',
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
    };
  },

  created () {},

  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>


<style scoped lang="scss">

</style>