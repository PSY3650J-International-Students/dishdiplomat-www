<template>
  <v-card
    min-width=300px
    max-width=340px
    class="mx-auto"
    @click.stop="openDialog"
    >
    <v-img
      :src="props.window.cover_picture"
      width="100%"
    ></v-img>
    <v-card-title>
      {{ props.window.name }}
    </v-card-title>
  </v-card>
  <v-spacer />
  <v-dialog v-model="dialogOpen" persistent max-width="500px"
          activator="parent"
          width="auto"
        >
          <v-card>
            <v-card-text>
              <v-card-title>
              {{ props.window.name }}
              </v-card-title>
              <v-list>
                <v-list-item v-for="dish in window.dishes" :key="dish.name">
                    {{ dish.name }}
                      <v-img
                      :src="dish.cover_picture"
                          width="100%"
                          ></v-img>
                    Chinese name:
                    {{ dish.chinese_name }}
                    <br>
                    {{ dish.introduction }}
                    <br>
                    <template v-if="dish.flavor && dish.flavor.length > 0">
                        Flavor:
                        <br>
                        <v-list>
                          <v-list-item v-for="flavor in dish.flavor">
                            {{ flavor }}
                          </v-list-item>
                        </v-list>
                      </template>
                  </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="closeDialog">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>


<script lang="ts" setup>
  import { Canteen } from '@/types/Canteen';
import { CanteenWindow } from '@/types/CanteenWindow';
import { PropType, ref } from 'vue';
  const props = defineProps(
    {
      window: {
        type: Object as PropType<CanteenWindow>,
        required: true
      },
      canteen: {
        type: Object as PropType<Canteen>,
        required: true
      }
    }
  )
  const get_window_path = (canteen: Canteen, window: CanteenWindow)=>{
    return '/canteen/'+canteen.path+'/'+window.path
  }

  const dialogOpen = ref(false)
  let dialogTimer: ReturnType<typeof setTimeout> | null = null

    const openDialog = () => {
      event.stopPropagation()
    dialogOpen.value = true
  }

  const closeDialog = () => {
      dialogOpen.value = false
  }
</script>
