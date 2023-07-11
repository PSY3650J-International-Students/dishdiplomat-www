<template class="fill-height fill-width">
  <canvas id="canvas" ref="canvas"></canvas>
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router'
  import { ref, watch, onMounted } from 'vue'
  const route = useRoute()
  const msg = ref(route.params.order_text as string)

  watch(() => route.params.order_text, (val) => {
    msg.value = val as string
  })

  var canvas: HTMLCanvasElement
  var ctx: CanvasRenderingContext2D
  var location_x = 0

  onMounted(() => {
    canvas = document.getElementById('canvas') as HTMLCanvasElement
    ctx = canvas.getContext('2d') as CanvasRenderingContext2D

    resize_canvas()
    setInterval(repaint, 1000 / 60)

  })

  const resize_canvas = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  const repaint = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.font = '50vh sans-serif'
    ctx.textBaseline = 'middle'

    var text_width = ctx.measureText(msg.value).width

    location_x -= 10
    if (location_x < -text_width) {
      location_x = canvas.width
    }

    ctx.fillText(msg.value, location_x, canvas.height / 2)
    ctx.stroke();
  }

  // watch window resize
  window.addEventListener('resize', () => {
    resize_canvas()
    repaint()
  })

  // watch screen orientation change
  window.addEventListener('orientationchange', () => {
    resize_canvas()
    repaint()
  })

</script>
