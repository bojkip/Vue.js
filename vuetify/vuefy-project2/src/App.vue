<template>
  <v-app color="red">
    <the-navbar></the-navbar>
    <v-content class="mx-4 mb-4">
      <router-view></router-view>
    </v-content>

  </v-app>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue';

export default {
  name: 'App',
  components: {
    TheNavbar,
  },
  data() {
    return {
    };
  },
};
</script>
