import Main from './src/components/Main'
import Typing from './components/Typing'
import _Vue from 'vue'

Main.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue
  }
  Vue.component(Main.name, Main)
}
Typing.install = Vue => {
  if (!Vue) {
    window.Vue = Vue = _Vue;
  }
  Vue.component(Typing.name, Typing)
}
export {
  Main,
  Typing
};
