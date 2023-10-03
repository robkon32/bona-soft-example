import globalSize from '@/stores/useSmallDevice'

const handleResize = () => {
  globalSize.width = window.innerWidth
  globalSize.height = window.innerHeight
}

const vResize = {
  mounted() {
    window.addEventListener('resize', handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', handleResize)
  }
}

export default vResize
