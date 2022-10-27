import {createApp} from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'

const moduleA = {
    state: () => {
        return {
            textA: 'moduleA'
        }
    },
    getters: {

    },
    mutations: {},
    actions: {},
}

const moduleB = {
    state: () => {
        return {
            textB: 'moduleB'
        }
    },
    getters: {},
    mutations: {},
    actions: {},
}

const moduleCounter = {
    state() {
        return {
            count: 10
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    },
    actions: {}
}

const store = createStore(
    {
        modules: {
            moduleA: moduleA,
            moduleB: moduleB,
            moduleCounter: moduleCounter
        }
    }
)

const app = createApp(App)
app.use(store);
app.mount("#app");