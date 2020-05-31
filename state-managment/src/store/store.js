
import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import * as mutations from './mutations';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        counter: 0
    }
    ,
    getters: {
        counterMul(state) {
            return state.counter * 2;
        }
    },
    mutations: {
        //mutations are always syncronous and cant have async code
        ...mutations
    },
    actions: {
        //we can write async code and when the result is ready we can commit a mutaiton
        incAsync: (context, payload) => {
            setTimeout(() => {
                context.commit('inc', payload); //mutation
            }, 2000)
        },
        decAsync: (context) => {
            setTimeout(() => {
                context.commit('decrement');
            }, 1000);
        }
    },
    modules: {
        user: { ...user, namespaced: true }
    }
})