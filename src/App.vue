<template>
  <div>
    <ZhLoading :size="80" :cicleNum="4" :borderWidth="3" />
    <Typing>
     中文测试chinese test
    </Typing>
    <!-- <Typing>asf顺丰到付sfs</Typing> -->
  </div>
</template>

<script>
import ZhLoading from './components/loading/ZhLoading'
import Typing from './components/typing/Typing'
export default {
    data(){
      return {
        size: 260,
        borderWidth: 8
      }
    },
    components:{
      ZhLoading,
      Typing
    }
}
</script>
<style lang="scss">
  html,body{
    background: #fff !important;
  }
</style>