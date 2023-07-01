<template class="fill-height fill-width">
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { ref, watch, onMounted } from 'vue'
  const route = useRoute()
  const msg = ref(route.params.order_text)

  watch(() => route.params.order_text, (val) => {
    msg.value = val
  })

  const canvas = ref(null)
  const ctx = ref(null)
  var location_x = 0

  onMounted(() => {
    canvas.value = document.getElementById('canvas')
    ctx.value = canvas.value.getContext('2d')

    resize_canvas()
    setInterval(repaint, 1000 / 60)

  })

  const resize_canvas = () => {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  const repaint = () => {
    ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height)
    ctx.value.font = '50vh sans-serif'
    ctx.value.textBaseline = 'middle'

    var text_width = ctx.value.measureText(msg.value).width

    location_x -= 10
    if (location_x < -text_width) {
      location_x = canvas.value.width
    }
    console.log(location_x)

    ctx.value.fillText(msg.value, location_x, canvas.value.height / 2)
    ctx.stroke();
  }

  // watch window resize
  window.addEventListener('resize', () => {
    resize_canvas()
    repaint()
  })

</script>

<style scoped>
.content {
  font-size: 50vh;
  display: flex;
  white-space: nowrap;
  overflow: scroll;
}
</style>
