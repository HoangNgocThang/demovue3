<template>

  <ComponentA/>
  <br/>
  <ComponentB/>

  <br/>
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <br/>

  <br/>
  <!--  <QuizForm text="thanghoangngoc"/>-->
  <br/>

  <br/>
  <ChildComp @em1="(msg)=> call1(msg)"/>
  <br/>

  <p>{{ childMsg }}</p>

  <br/>
  <TestForm/>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import QuizForm from './components/QuizForm';
// import TestListCom from "@/components/TestListCom";
import ChildComp from './components/ChildComp';
import TestForm from "@/components/TestForm";
import ComponentA from "@/components/ComponentA";
import ComponentB from "@/components/ComponentB";

export default {
  name: 'App',
  components: {
    ComponentB,
    ComponentA,
    TestForm,
    // HelloWorld,
    // QuizForm
    ChildComp,
  },
  data() {
    return {
      textClass: 'text',

      todoId: 1,
      todoData: null,

      childMsg: 'No child msg yet'
    }
  },
  created() {
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      this.todoData = null
      const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${this.todoId}`
      )
      this.todoData = await res.json()
    },
    call1(msg) {
      this.childMsg = msg
    },
  },
  watch: {
    count(newCount) {
      if (newCount < 0) {
        this.textClass = 'text-red'
      } else if (newCount >= 0 && newCount <= 10) {
        this.textClass = 'text'
      } else if (newCount >= 11) {
        this.textClass = 'text-green'
      }
    },

    // childMsg(newValue) {
    //   if (newValue == "thang") {
    //     this.childMsg = "thien"
    //   }
    // }

  }
}
</script>

<style>

.text-red {
  color: red;
}

.text-green {
  color: green;
}

.text {
  color: black;
}

</style>
