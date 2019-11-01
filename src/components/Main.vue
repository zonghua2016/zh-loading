<template>
  <div class="ccle" :style="{width: size + 'px', height: size + 'px'}">
    <b><span><i></i></span></b>
    <b><span><i></i></span></b>
    <b><span><i></i></span></b>
    <b><span><i></i></span></b>
    <b><span><i></i></span></b>
    <b><span><i></i></span></b>
    <b><span><i></i></span></b>
    <b><span><i></i></span></b>
  </div>
</template>
<script>
export default {
  name: 'zh-loading',
  props:{
    size:{
      type: Number,
      default: 260
    }
  },
  computed:{

  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #333;
}

.ccle {
  width: 260px;
  height: 260px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

b {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}

b span {
  display: block;
  width: 100%;
  height: 50%;
  overflow: hidden;
}

b i {
  display: block;
  width: 100%;
  height: 200%;
  border-width: 8px;
  border-radius: 50%;
  border-style: solid;
  box-sizing: border-box;
}

b:nth-child(1) {
  width: 100%;
  height: 100%;
  animation: ccle8 2.5s ease-in-out infinite;
}

b:nth-child(1) i {
  border-color: #629;
}

b:nth-child(2) {
  width: calc(100% - 30px);
  height: calc(100% - 30px);
  animation: ccle7 2.5s ease-in-out infinite;
}

b:nth-child(2) i {
  border-color: #c28;
}

b:nth-child(3) {
  width: calc(100% - 60px);
  height: calc(100% - 60px);
  animation: ccle6 2.5s ease-in-out infinite;
}

b:nth-child(3) i {
  border-color: #ee2255;
}

b:nth-child(4) {
  width: calc(100% - 90px);
  height: calc(100% - 90px);
  animation: ccle5 2.5s ease-in-out infinite;
}

b:nth-child(4) i {
  border-color: #f53;
}

b:nth-child(5) {
  width: calc(100% - 120px);
  height: calc(100% - 120px);
  animation: ccle4 2.5s ease-in-out infinite;
}

b:nth-child(5) i {
  border-color: #f53;
}

b:nth-child(6) {
  width: calc(100% - 150px);
  height: calc(100% - 150px);
  animation: ccle3 2.5s ease-in-out infinite;
}

b:nth-child(6) i {
  border-color: #f53;
}

b:nth-child(7) {
  width: calc(100% - 180px);
  height: calc(100% - 180px);
  animation: ccle2 2.5s ease-in-out infinite;
}

b:nth-child(7) i {
  border-color: #f53;
}

b:nth-child(8) {
  width: calc(100% - 210px);
  height: calc(100% - 210px);
  animation: ccle1 2.5s ease-in-out infinite;
}

b:nth-child(8) i {
  border-color: #f53;
}

@keyframes ccle1 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes ccle2 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(720deg);
  }
}

@keyframes ccle3 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1080deg);
  }
}

@keyframes ccle4 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1440deg);
  }
}

@keyframes ccle5 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(1800deg);
  }
}

@keyframes ccle6 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(2160deg);
  }
}

@keyframes ccle7 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(2520deg);
  }
}

@keyframes ccle8 {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(2880deg);
  }
}
</style>
