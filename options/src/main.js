import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import './firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
Vue.use(VueFire);

// chrome.runtime.getBackgroundPage((app) => {
const app = {};
  new Vue({
    el: '#app',
    render: h => h(App, {props: {app: app}})
  });
// });


