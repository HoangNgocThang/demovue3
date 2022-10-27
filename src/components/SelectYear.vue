<template>
  <select class="form-control" v-model="yearSelected"  @change="click1">
    <option v-for="obj in year" :value="obj" :key="obj">{{obj}}</option>
  </select>
</template>

<script>
import moment from "moment";

export default {
  props: ['loading', 'text', 'icon'],
  name: "SelectYear",
  emits: ['selectOneYear'],
  data() {
    return {
      year: [],
      yearSelected: null
    }
  },
  mounted() {
    let startYear = 2019;
    const endYear = moment().year()
    this.year = [];
    while (startYear < endYear) {
      startYear++
      this.year.push(startYear)
    }
    this.year= this.year.reverse()
    console.log(endYear)
  },
  methods: {
    click1() {
      // alert('a')
      console.log('a111', this.yearSelected)
      this.$emit('selectOneYear', this.yearSelected)
    }
  }
}


</script>

<style scoped>

</style>
