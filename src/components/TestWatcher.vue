<template>
  <div class="my-component">
    <div>Message type: {{ message.type }}</div>
    <div>Message text: {{ message.text }}</div>
    <div>
      <button @click="changeType">Change type</button>
    </div>
    <div>
      <button @click="changeText">Change text</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TestWatcher",
  data() {
    return {
      message: {
        type: 'greeting',
        text: 'How are you?'
      }
    }
  },
  methods: {
    changeType() {
      const a = Math.floor(Math.random() * 11);
      this.message.type = 'this is new type'+a
    },
    changeText() {
      const b = Math.floor(Math.random() * 11);
      this.message.text = 'this is new text'+b
    }
  },
  computed: {
    getType() {
      return this.message.type
    },
    getText() {
      return this.message.text
    }
  },
  watch: {
    getType() {
      console.log('type changed')
    },
    getText() {
      console.log('text changed')
    }
  }
}
</script>

<style scoped>
.my-component {
  color: red;
}
</style>
