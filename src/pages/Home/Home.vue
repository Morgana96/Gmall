<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recconmend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor) in floorList" :key="floor.id" :List = "floor"/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer';
import Recconmend from './Recconmend';
import Rank from './Rank';
import Like from './Like';
import Floor from './Floor';
import Brand from './Brand';

import { mapState } from 'vuex';


export default {
    name: "Home",
    components: { ListContainer, Recconmend, Rank, Like, Floor, Brand },
    mounted(){
      this.$store.dispatch('getFloorList')
    
    },
    computed:{
      ...mapState({
        floorList:(state) => state.home.floorList
      })
    }
}

</script>

<style>

</style>