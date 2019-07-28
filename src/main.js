import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/_element-variables.scss'
import './styles/_index.scss'
import VueI18n from 'vue-i18n'
import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(ElementUI, { locale })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
