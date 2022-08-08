import { reactive } from 'vue'

export const storeConfig = reactive({
    count: 0,
    increment() {
        this.count++
    }
})
