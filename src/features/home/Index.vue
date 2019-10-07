<template>
  <section>
    <div >
      <h1>Kollab</h1>
      <v-layout
    wrap
    style="height: 200px;"
  >
    <v-container>
      <v-layout justify-center>
        <v-btn
          color="pink"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-layout>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
     <v-avatar>
        <img src="https://randomuser.me/api/portraits/men/84.jpg">
     </v-avatar>
    </v-navigation-drawer>
  </v-layout>
    </div>
  </section>
</template>

<script>
export default {
  name: "home",

  data() {
    return {
      drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
    };
  },


  components: {},

  computed: {},

  mounted() {},

  methods: {}
};
</script>


<style scoped lang="scss">

</style>