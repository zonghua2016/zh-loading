<template>
  <div>
    <Main :size="80" :cicleNum="4" :borderWidth="3" />
  </div>
</template>

<script>
import Main from './components/Main'
export default {
    data(){
      return {
        size: 260,
        borderWidth: 8
      }
    },
    components:{
      Main
    }
}
</script>