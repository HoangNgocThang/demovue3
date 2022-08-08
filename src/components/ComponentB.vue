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
      From B: {{ storeConfig.count }}
    </button>
  </div>
</template>
