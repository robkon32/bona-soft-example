import { reactive, computed } from 'vue'

type Pixels = number

type GlobalSize = {
  width: Pixels
  height: Pixels
}

const TabletDeviceWidth: Pixels = 1024
const SmallDevice: Pixels = 640

const globalSize = reactive<GlobalSize>({ width: window.innerWidth, height: window.innerHeight })

export default globalSize
export const isTabletDevice = computed(() => globalSize.width < TabletDeviceWidth)
export const isSmallDevice = computed(() => globalSize.width < SmallDevice)
