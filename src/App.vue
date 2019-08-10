<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>TodoVue</span>
        <!-- <span class="font-weight-light">MATERIAL DESIGN</span> -->
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Vue + Vuex + Vuetify</span>
      </v-btn>
    </v-app-bar>
    <!-- Todos -->
    <Todos/>
  </v-app>
</template>

<script>
import Todos from './components/Todos'

export default {
  name: 'App',
  components: {
    Todos,
  },
  data: () => ({
    //
  }),
};
</script>
