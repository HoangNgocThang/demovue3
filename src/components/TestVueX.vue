<template>
  <div>
    <p>{{ $store.state.moduleCounter.count }}</p>
    <p>{{ count }}</p>
    <p>{{ textA }}</p>
    <p>{{ textB }}</p>
    <button @click="click">
      click
    </button>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "TestVueX",
  computed: {
    ...mapState({
      count: state => state.moduleCounter.count,
      textA: state => state.moduleA.textA,
      textB: state => state.moduleB.textB
    })
  },
  methods: {
    click() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>