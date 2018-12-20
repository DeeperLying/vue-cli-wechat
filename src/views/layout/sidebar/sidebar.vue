<template>
  <div>sidebar
    <router-link to="home" >
      home
    </router-link>
    <div v-on:click="navRouter" >0000</div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  mounted () {},
  methods: {
    navRouter () {
      // this.$ourter.push('home')
      this.$router.push({ name: 'uuuuuids' })
    },
    navReplace () {
      this.$router.replace({ name: 'uuuuuids' })
    }
  }
}
</script>

<style scoped>

</style>
