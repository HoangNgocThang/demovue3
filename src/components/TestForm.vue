<template>
  <div>
    <div>Checked names: {{ formRes.checkedRes }}</div>
    <ul>
      <li v-for="item in checkedNames" :key="item.id">
        <input
            type="radio"
            :value="item"
            v-model="formRes.checkedRes"
        />
        <p>{{ item.name }}</p>
      </li>
    </ul>

    <div>Checked Multi Item: {{ formRes.itemRes }}</div>
    <ul>
      <li v-for="it in items" :key="it.id">
        <input
            type="checkbox"
            :value="it"
            v-model="formRes.itemRes"
        />
        <p>{{ it.name }}</p>
      </li>
    </ul>

    <div>Checked number sheet: {{ formRes.numberSheetRes }}</div>
    <select v-model="formRes.numberSheetRes">
      <option disabled value="">Please select one</option>
      <option
          v-for="n in numberSheets"
          :key="n"
          :value="n">{{ n }}
      </option>
    </select>

    <br/>
<!--    <input v-model.number="valueInput">-->
  </div>
</template>

<script>
export default {
  name: "TestForm.vue",

  data() {
    return {
      checkedNames: [
        {
          id: 1,
          name: "thang",
        },
        {
          id: 2,
          name: "thien",
        },
        {
          id: 3,
          name: "phuong",
        }
      ],

      items: [
        {
          id: 1,
          name: 'item1'
        },
        {
          id: 2,
          name: 'item2'
        },
        {
          id: 3,
          name: 'item3'
        }
      ],

      numberSheets: [
        4, 9, 16, 29
      ],

      formRes: {
        checkedRes: {},
        itemRes: [],
        numberSheetRes: null,

      },
      // valueInput: 1
    }
  },

  mounted() {
  },
  methods: {}
}
</script>

<style scoped>

</style>
