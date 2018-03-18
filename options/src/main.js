import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import './firebase'

Vue.use(VueFire);

chrome.runtime.getBackgroundPage((app) => {
  new Vue({
    el: '#app',
    render: h => h(App, {props: {app: app}})
  });
});


