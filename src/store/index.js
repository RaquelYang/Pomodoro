import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const time = parseInt(process.env.VUE_APP_TIME)
const timebreak = parseInt(process.env.VUE_APP_TIMEBREAK)

export default new Vuex.Store({
  state: {
    workalarm: 'alarm.mp3',
    breakalarm: 'alarm.mp3',
    items: [],
    current: '',
    finished: [],
    id: 0,
    timeleft: time,
    break: false
  },
  mutations: {
    selectworkalarm (state, data) {
      state.workalarm = data
    },
    selectbreakalarm (state, data) {
      state.breakalarm = data
    },
    additem (state, data) {
      state.items.push({
        name: data,
        edit: false,
        done: false,
        model: data,
        idx: state.id
      })
      if (state.current === '') {
        state.current = state.items[0].name
      }
      state.id++
    },
    edititem (state, data) {
      state.items[data].edit = true
    },
    delitem (state, data) {
      data.splice(0, 1)
    },
    submit (state, data) {
      state.items[data.idx].name = state.items[data.idx].model
      state.items[data.idx].edit = false
    },
    cancel (state, data) {
      state.items[data].model = state.items[data].name
      state.items[data].edit = false
    },
    start (state) {
      state.current = state.break ? '休息一下' : state.items.shift().name
    },
    countdown (state) {
      state.timeleft--
    },
    finish (state) {
      if (!state.break) {
        state.finished.push(state.current)
      }
      state.current = ''
      if (state.items.length > 0) {
        state.break = !state.break
      }
      state.timeleft = state.break ? timebreak : time
    },
    changeitem (state, data) {
      state.current = data
    }
  }
})
