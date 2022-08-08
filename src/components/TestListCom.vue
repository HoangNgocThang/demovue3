<template>
  <ul v-for="numbers in sets" :key="numbers">
    <li v-for="n in even(numbers)" :key="n">{{ n }}</li>
  </ul>
</template>

<script>
export default {
  name: "TestListCom",

  data() {
    return {
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10]
      ]
    }
  },
  methods: {
    even(numbers) {
      return numbers.filter(number => number % 2 === 0)
    }
  }
}
</script>

<style scoped>

</style>
