import Vue from 'vue'
import App from './App.vue'
import '../style/style.css'
import i18n from './assets/locales'

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})
