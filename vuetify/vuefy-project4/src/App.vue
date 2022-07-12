<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="white"
      
      
    >
      <div class="mt-4 mx-2">
        <v-icon>mdi-sync</v-icon>
      </div>
      <div>
        <v-toolbar-title class="font-weight-bold mt-4">CONVERT</v-toolbar-title>
      </div>
      
      <search-bar></search-bar>
      
      <v-spacer></v-spacer>
    
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import SearchBar from './components/SearchBar.vue';

export default {
  components: {
    SearchBar
  },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
