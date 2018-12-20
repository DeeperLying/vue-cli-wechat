<template>
    <div>
      <h3>pppp</h3>
      <li v-show="changableNum() === 0" >0</li>
      <li v-show="changableNum() === 1" >1</li>
      <li v-show="changableNum() === 2" >2</li>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'block',
  mounted () {
    console.log(this.changableNum())
  },
  methods: {
    ...mapState('footerStatus', {
      changableNum: 'changableNum'
    })
  }
}
</script>

<style scoped>

</style>
