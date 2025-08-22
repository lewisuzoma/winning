import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import userStore from './stores/userStore';

const store = createStore({
    modules: {
        userStore,
    },
    state: {
        page: ['home']
    },
    mutations: {
        SET_PAGE(state, value){
            state.page.push(value);
        },
        REMOVE_PAGE(state) {
            state.page.pop();
        }
    },
    actions: { 
        UPDATE_PAGE({ commit }, value) {
            commit('SET_PAGE', value);
        },    
        REMOVE_PAGE({ commit }) {
            commit('REMOVE_PAGE');
        },    
     },
     getters: {
        getPage: (state) => state.page
    },
    plugins: [createPersistedState({
        paths: []
    })],
})

export default store;