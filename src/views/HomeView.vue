<template>
  <div class="home">
    <index></index>
  </div>
</template>

<script>
// @ is an alias to /src
import index from '../components/home/index';

export default {
  name: 'HomeView',
  components: {
    index
  }
}
</script>
