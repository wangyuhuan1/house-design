import Vue from 'vue'
import App from './App.vue'
import {Button,Form,Field,Swipe,SwipeItem,ImagePreview} from 'vant'

Vue.config.productionTip = false
Vue.use(Button).use(Form).use(Field).use(Swipe).use(SwipeItem)
Vue.prototype.ImagePreview=ImagePreview
new Vue({
  render: h => h(App),
}).$mount('#app')
