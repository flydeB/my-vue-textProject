
import Vue from 'vue';
import Vuex from 'vuex';

import testVuex from './textVuex/index';


Vue.use(Vuex)
 const store = new Vuex.Store({
     modules:{
        testVuex 
     }
 })

 export default store
