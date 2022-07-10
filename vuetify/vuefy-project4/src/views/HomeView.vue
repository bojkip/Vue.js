<template>
  <div>
    <search-bar></search-bar>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld';
import SearchBar from '../components/SearchBar.vue';

export default {
  name: 'Home',

  components: {
    HelloWorld,
    SearchBar,
  },
};
</script>
