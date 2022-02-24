<template>
  <div id="settings">
    <div class="box">
      <div class="left mt-5">
        <div class="container">
          <div class="row">
            <div class="col-12 px-5">
              <div class="py-2 line d-flex">
                <div class="text">
                  <img src="../assets/images/tomato.png">
                  Work Ringrone</div>
              </div>
              <div class="option d-flex">
                <div class="col-4 optionradio" v-for="item in items" :key="item.src">
                  <input id="work" type="radio" name="work" @change="selectworkalarm">
                  <div class="colorradio"></div>
                  <label for="work" class="txt">{{item.name}}</label>
                </div>

              </div>
              <button class="additem">
                <span style="font-size:3rem;font-weight: bolder;">+</span>
                <span>Upload</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="left mt-5">
        <div class="container">
          <div class="row">
            <div class="col-12 px-5">
              <div class="py-2 line d-flex">
                <div class="text">
                  <img src="../assets/images/tomato.png">
                  Break Ringrone</div>
              </div>
              <div class="option d-flex">
                <div class="col-4 optionradio" v-for="item in items" :key="item.src">
                  <input id="break" type="radio" name="break" @change="selectbreakalarm">
                  <div class="colorradio"></div>
                  <label for="break" class="txt">{{item.name}}</label>
                </div>

              </div>
              <button class="additem">
                <span style="font-size:3rem;font-weight: bolder;">+</span>
                <span>Upload</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        { name: 'alarm', src: 'alarm.mp3' },
        { name: 'yay', src: 'yay.mp3' }
      ]
    }
  },
  methods: {
    selectworkalarm (item) {
      this.$store.commit('selectworkalarm', this.items[0].src)
    },
    selectbreakalarm (item) {
      console.log(item)
      this.$store.commit('selectbreakalarm', this.items[0].src)
    }
  }
}
</script>
