
require('./bootstrap');

window.Vue = require('vue');
import router from "./router" ;
import store from "./store" ;
import swal from 'sweetalert';

const objectToFormData = window.objectToFormData;

// register the plugin on vue
import Toasted from 'vue-toasted'; 
Vue.use(Toasted)
// you can also pass options, check options reference below
Vue.use(Toasted)
Vue.component('navbar',require('./components/admin/Navbar.vue').default)
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));

import VueProgressBar from 'vue-progressbar'

Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

const app = new Vue({
    el: '#app',
    router,
    store,
    
});
