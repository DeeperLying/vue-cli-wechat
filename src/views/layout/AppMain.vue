<template>
  <div>
    <h3>这也是一个多层嵌套模版</h3>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/views/layout/navbar/navbar'
import Sidebar from '@/views/layout/sidebar/sidebar'
export default {
  name: 'AppMain',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style scoped>

</style>
