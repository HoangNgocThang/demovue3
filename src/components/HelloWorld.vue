<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="onCLick">click</button>
    <h2>Text Input</h2>
    <input v-model="text"> {{ text }}

    <h2>Checkbox</h2>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">Checked: {{ checked }}</label>

    <!--
      multiple checkboxes can bind to the same
      array v-model value
    -->
    <h2>Multi Checkbox</h2>

    <ul v-if="names && names.length>0">
      <li v-for="item of names" :key="item.id">
        <input type="checkbox"  :value="item.name"  v-model="checkedNames">
        <label>{{item.name}}</label>
      </li>
    </ul>
    <p>Checked names: {{ checkedNames }}</p>

    <h2>Radio</h2>
    <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span>

    <h2>Select</h2>
    <select v-model="selected">
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>

    <h2>Multi Select</h2>
    <select v-model="multiSelected" multiple style="width:100px">
      <option>A</option>
      <option>B</option>
      <option>C</option>
    </select>
    <span>Selected: {{ multiSelected }}</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      text: 'Edit me',
      checked: true,
      names: [
        {id:1,name:'Jack', selected:false},
        {id:2,name:'Jack2',selected:false},
        {id:3,name:'Jack3',selected:false},
      ],
      checkedNames:[],
      picked: 'One',
      selected: 'A',
      multiSelected: ['A'],
    }
  },
  props: {
    msg: String,
  },
  mounted() {
  },
  methods: {
   onCLick() {
     // console.log("VV222",this.props.msg)
     alert(this.$props.msg)
   }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
