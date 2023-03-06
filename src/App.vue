<template>
  <div>
    <myHeader></myHeader>
    <router-view></router-view>
    <myFooter v-show="$route.meta.show"></myFooter>
   
  </div>
</template>

<script>
import myHeader from './components/myHeader'
import myFooter from './components/myFooter'
import TypeNav from './components/TypeNav';

export default {
  name: 'App',
  components: {
    myHeader,
    myFooter,
    TypeNav
  },
  mounted(){
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
