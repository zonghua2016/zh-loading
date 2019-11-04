<template>
  <div>
    <Main :size="80" :cicleNum="4" :borderWidth="3" />
    <Typing>
      <div>
        <h2>
          <p>
            <span>顺丰到付sfs</span>
          </p>
        </h2>
      </div>
    </Typing>
    <!-- <Typing>asf顺丰到付sfs</Typing> -->
  </div>
</template>

<script>
import Main from './components/Main'
import Typing from './components/Typing'
export default {
    data(){
      return {
        size: 260,
        borderWidth: 8
      }
    },
    components:{
      Main,
      Typing
    }
}
</script>
<style lang="scss">
  html,body{
    background: #fff !important;
  }
</style>