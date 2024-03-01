import Vue from 'vue';
import Vuex from 'vuex';

Vue.useAttrs(Vuex);

export default new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment(state){
            state.count++;
        }
    },
    actions:{
        increment(context){
            context.commit('increment')
        }

    },
    getters:{
        getCount(state){
            return state.count;
        }
    }
})