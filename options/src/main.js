import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import './firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import 'codemirror/lib/codemirror'
import 'codemirror/lib/codemirror.css'
import 'froala-editor/js/froala_editor.pkgd.min'


// Require Froala Editor css files.
import 'froala-editor/css/froala_editor.pkgd.min.css'
import 'font-awesome/css/font-awesome.css'
import 'froala-editor/css/froala_style.min.css'

import VueFroala from 'vue-froala-wysiwyg'
Vue.use(VueFroala);

Vue.use(Vuetify);
Vue.use(VueFire);

// chrome.runtime.getBackgroundPage((app) => {
const app = {};
  new Vue({
    el: '#app',
    render: h => h(App, {props: {app: app}})
  });
// });


