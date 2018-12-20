<template>
  <div>
    <p>home</p>
    <ul>
      <li v-show="getChangedNum() === 0" >0</li>
      <li v-show="getChangedNum() === 1" >1</li>
      <li v-show="getChangedNum() === 2" >2</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  name: 'home',
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    next()
  },
  mounted () {
    setTimeout(() => {
      this.getNewNum(2)
    }, 2000)
  },
  methods: {
    ...mapState('footerStatus', {
      changableNum: 'changableNum',
      showFooter: 'showFooter'
    }),
    ...mapState({
      isShow: state => state.footerStatus.showFooter
    }),
    ...mapGetters('footerStatus', {
      getChangedNum: 'getChangedNum'
    }),
    ...mapActions('footerStatus', {
      getNewNum: 'getNewNum'
    }),
    ...mapMutations('footerStatus', {
      newNum: 'newNum'
    })
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
