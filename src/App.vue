<template>
  <div>
    <Main :size="size" />
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