import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import { defineStore } from 'pinia'

type Pixels = number

export interface WindowResizeOutput {
  width: Ref<Pixels>
  height: Ref<Pixels>
}

const useWindowResize = defineStore<'windowResize', WindowResizeOutput>('windowResize', () => {
  const windowWidth = ref(window.innerWidth)
  const windowHeight = ref(window.innerHeight)

  const handleResize = () => {
    windowWidth.value = window.innerWidth
    windowHeight.value = window.innerHeight
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })

  return {
    width: windowWidth,
    height: windowHeight
  }
})

export default useWindowResize
