<template>
  <div>ChildComp</div>
  <input v-model="text1" @focus="true">
  <div @click="clickEm1"
       style="width: 100px; height:30px; background-color: green">
    click test emit
  </div>
  <div @click="clickTest('hello')"
       style="width: 100px; height:30px; background-color: red">
    click test call
  </div>

</template>

<script>
export default {
  emits: ['em1'],
  name: "ChildComp",
  expose: ['publicData', 'publicMethod'],
  data() {
    return {
      text1: '',
    }
  },
  methods: {
    clickEm1() {
      this.$emit('em1', this.text1)
    },
    clickTest(msg) {
      alert(msg)
    },
  }
}
</script>

<style scoped>

</style>
