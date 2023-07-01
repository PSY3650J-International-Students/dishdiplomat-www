<template>
  <v-container class="fill-height">
    <p class="content fill-height">{{ msg }}</p>
  </v-container>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { ref, watch } from 'vue'
  const route = useRoute()
  const msg = ref(route.params.order_text)

  watch(() => route.params.order_text, (val) => {
    msg.value = val
  })




  // canvas animation



</script>

<style scoped>
.content {
  font-size: 50vh;
  display: flex;
  white-space: nowrap;
  overflow: scroll;
}
</style>
