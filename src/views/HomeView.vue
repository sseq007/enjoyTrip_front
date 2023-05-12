<template>
  <div class="home">
    <index></index>
    <index2></index2>
  </div>
</template>

<script>
// @ is an alias to /src
import index from '../components/home/index';
import index2 from '../components/home/index2';

export default {
  name: 'HomeView',
  components: {
    index,
    index2
  }
}
</script>
