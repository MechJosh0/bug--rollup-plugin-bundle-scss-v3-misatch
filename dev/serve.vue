<script lang="ts">
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { FoobarSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  FoobarSample,
  // }
});
</script>

<template>
  <div id="app">
    <foobar-sample />
  </div>
</template>
