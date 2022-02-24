<template>
  <div id="home">
    <div class="box">
      <div class="left">
        <div class="todos-box">
          <div class="todos">
            <div class="image">
              <img src="../assets/images/textbar.svg" />
              <div class="first">
                <label for="todo"  v-if="currenttext === ''">
                  <span class="title" style="padding-left:2rem">沒有項目</span>
                </label>
                <label for="todo" v-else
                >
                  <input
                  type="radio" checked
                  id="todo"
                  />
                  <div class="radiotype"
                  ></div>
                  <span class="title" >{{currenttext}}</span>
                </label>
              </div>
            </div>
            <div class="others">
              <div class="todobox" v-for="(item, idx) in filtereditems" :key="item.idx">
                <label @click="changeitem(item.name)" >
                  <input type="radio" name="radioname" id="todo1" v-model="selected" :value='idx'/>
                  <div class="radiotype"></div>

                  <input
                  v-if="item.edit"
                  type="text"
                  v-model="item.model"
                  class="edit"
                  :id="'edit' + item.idx"
                  @keydown.enter="submit(item)"
                  @keydown.esc="cancel(item.idx)"
                  @blur="cancel(item.idx)"
                  >
                  <span class="title1"
                  v-if="!item.edit"
                  @dblclick="edititem(item.idx)">{{item.name}}</span>
                  <img src="../assets/images/play.png"
                  @click= "start"
                  v-if="startstatus===true"
                  />
                </label>
              </div>
            </div>
          </div>
          <div class="addtodo">
            <input
              type="text"
              class="addinput"
              placeholder="Add A New Mission"
              v-model="newinput"
              @keydown.enter="additem"
            />
            <button class="addbtn" @click="additem">
              <img src="../assets/images/plus.png" />
            </button>
          </div>
          <div class="recentcompleted">
            <div class="txt">
              <span class="recenttxt">Recently completed</span>
              <router-link class="more" to="/list">MORE</router-link>
              <router-view/>
              <!-- <span class="more">
                MORE
                </span> -->
            </div>
            <div class="completedtodo">
              <div></div>
              <span class="completedtxt">The completed thing to do today</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <img src="../assets/images/tomato0.svg" />
        <span class="timer">{{timetext}}</span>
        <div class="timeleftbar">
          <span class="bar"></span>
          <span class="timeleft"></span>
        </div>
        <div class="icons">
          <div class="start">
            <img src="../assets/images/play.png"
            v-if="timestatus !== 1"
            @click="start"
            />
            <img src="../assets/images/stop.png"
            v-if="timestatus === 1"
            @click="pause"
            />
          </div>

          <div class="cancel" @click="delitem(items)">
            <img src="../assets/images/cancle.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      newinput: '',
      // 0 = 停止, 1 = 倒數中, 2 = 暫停
      timestatus: 0,
      timer: 0,
      selected: undefined,
      startstatus: true
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    },
    filtereditems () {
      return this.$store.state.items.filter(item => {
        if (item.done) {
          return item.done
        } else {
          return !item.done
        }
      })
    },
    current () {
      return this.$store.state.current
    },
    currenttext () {
      return this.current
    },
    timeleft () {
      return this.$store.state.timeleft
    },
    timetext () {
      const m = Math.floor(this.timeleft / 60).toString().padStart(2, '0')
      const s = Math.floor(this.timeleft % 60).toString().padStart(2, '0')
      return `${m}:${s}`
    }
  },
  methods: {
    additem () {
      if (this.newinput.length > 0) {
        this.$store.commit('additem', this.newinput)
        this.newinput = ''
        if (this.items.length === 1) {
          this.selected = 0
        }
      }
    },
    edititem (index) {
      this.$store.commit('edititem', index)
      this.$nextTick(() => {
        this.$el.querySelector('#edit' + index).focus()
      })
    },
    delitem (item) {
      this.$store.commit('delitem', item)
    },
    submit (item) {
      if (item.model.length > 0) {
        this.$store.commit('submit', item)
      }
    },
    cancel (idx) {
      this.$store.commit('cancel', idx)
    },
    start () {
      this.startstatus = false
      if (this.timestatus === 0 && this.items.length > 0) {
        this.$store.commit('start')
      }
      if (this.current.length) {
        this.timestatus = 1
        this.timer = setInterval(() => {
          this.$store.commit('countdown')
          if (this.timeleft <= -1) {
            this.finish(false)
          }
        }, 1000)
      }
    },
    pause () {
      this.timestatus = 2
      this.startstatus = true
      clearInterval(this.timer)
    },
    finish (skip) {
      clearInterval(this.timer)
      this.timestatus = 0
      this.$store.commit('finish')
      if (!skip) {
        const audio = new Audio()
        audio.src = require('@/assets/video/' + this.$store.state.workalarm)
        audio.play()
      }
      if (this.items.length > 0) {
        this.start()
      }
    },
    changeitem (name) {
      this.$store.commit('changeitem', name)
    }
  }

}
</script>
