<script>
import { storeConfig } from './storeConfig.js'

export default {
  data() {
    return {
      storeConfig
    }
  },
  methods: {

  }
}
</script>

<template>
  <div>
    <button @click="storeConfig.increment()">
      From A: {{ storeConfig.count }}
    </button>
  </div>
</template>
